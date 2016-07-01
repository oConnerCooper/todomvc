'use strict';

const IndexController = {
    * test() {
        yield this.render('common/test', {
            title: '统一测试页面'
        });
    },

    * index() {
        yield this.render('index', {
            title: 'MGS系统'
        });
    },

    * render403() {
        yield this.render('common/403', {
            title: '蘑菇街'
        });
    }
};

module.exports = IndexController;
