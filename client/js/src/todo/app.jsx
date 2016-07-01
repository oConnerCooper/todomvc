import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configureStore';

const store = configureStore();
/*
<Provider> 组件： 这个组件需要包裹在整个组件树的最外层。
这个组件让根组件的所有子孙组件能够轻松的使用 connect() 方法绑定 store。
也就是给每个子component提供了直接到数据层的直接连接方式
*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
