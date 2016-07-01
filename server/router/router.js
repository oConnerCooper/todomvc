'use strict';
const router = require('koa-router')();

// 首页的controller
const IndexController = require('../api/index/controllers/index');

// 路由跳转首页
router.get('跳转index页面', '/', IndexController.index);

module.exports = router;