'use strict';
const path = require('path');
const koa = require('koa');
const favicon = require('koa-favicon');
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const cors = require('koa-cors');
const render = require('koa-swig');
const session = require('koa-generic-session');
const uaparser = require('ua-parser-js');
const appVersion = require('./config/version');
const router = require('./router/router.js');
const app = koa();

// 设置当前的运行环境
const NODE_ENV = process.env.NODE_ENV;
console.log(`NODE_ENV = ${NODE_ENV}`);

// 重写koa的render方法
app.context.render = (function() {
    let _global = {};
    let MGS = render({
        // 设置了模板的位置
        root: path.join(__dirname, 'views'),
        ext: 'html',
        cache: false
    })
    
    return function(view, data) {
        data.appVersion = appVersion.appVersion;
        data.env = NODE_ENV;
        data._global = JSON.stringify(Object.assign({}, _global, data._global));
        return MGS.call(this, view, data);
    };
}());

app.context.json = function(status, data) {
    this.body = {
        code: status.code,
        msg: status.msg,
        data: data
    };
};
/**
 * middlewares
 */
app.use(favicon(path.join(__dirname + '/../static/favicon.ico')));
app.use(koaStatic(path.join(__dirname, '/../static')));
app.use(logger());

// 请求添加跨域头，可以带cookie
app.use(cors({ credentials: true }));
// 用于保存cookie的秘钥
app.keys = ['mogu', 'www.mogujie.com'];
app.use(session(app));

// user agent解析
app.use(function*(next) {
    this.ua = uaparser(this.headers['user-agent']);
    yield next;
});

// 这里是去取打包好的静态资源
app.use(koaBody({
    formidable: {
        // 这个是上传文件的地址
        uploadDir: path.join(__dirname, '../static/files')
    },
    multipart: true
}));
app.use(router.routes());
app.use(router.allowedMethods());


if (NODE_ENV === 'development') {
    app.listen(1314, function() {
        console.log('development: http:www.mogu-guard.com');
    });
} else {
    app.listen(1314, function() {
        console.log('production: http:www.mogu-guard.com');
    });
}

