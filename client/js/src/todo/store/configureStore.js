import { createStore, combineReducers, applyMiddleware } from 'redux';


// 引入所有的reducers
import reducers from '../reducers';


/**
*引入中间件
*/

import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

/*
applyMiddleware:
entry:所有的中间件
return出来的：就是createStore函数
作用就是把createStore里面方法注入到中间件中去，说到底就是嵌套一下
*/
const createMiddleWare = applyMiddleware(
    thunk,
    logger
)(createStore);


/**
*设置根树
*/

const rootReducer = combineReducers(reducers);

export default function(initialData) {
    const store = createMiddleWare(rootReducer, { filter: '', list: [] });
    return store;
}