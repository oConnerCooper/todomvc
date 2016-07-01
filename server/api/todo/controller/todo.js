'use strict';

const TodoController = {
    * test() {
        yield this.render('common/test', {
            title: '统一测试页面'
        });
    },

    * todo() {
        yield this.render('todo', {
            title: '项目列表'
        });
    },

    * render403() {
        yield this.render('common/403', {
            title: '蘑菇街'
        });
    }
};

module.exports = TodoController;
