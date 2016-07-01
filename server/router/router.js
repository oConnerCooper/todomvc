'use strict';
const router = require('koa-router')();

// 首页的controller
const IndexController = require('../api/index/controllers/index');
// todoList的controller
const TodoController = require('../api/todo/controller/todo');

// 路由跳转首页
router.get('跳转index页面', '/', IndexController.index);
router.get('跳转index页面', '/todo', TodoController.todo);

module.exports = router;