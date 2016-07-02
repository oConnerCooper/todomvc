import React from 'react';

import { Route } from 'react-router';
import ReactRouter from 'react-router';
// import createHashHistory from 'history/lib/createHashHistory'


// 引入页面的container
// import Todo from './Todo';
import Todo from '../components/Todo';

// 用于整体的布局
const Layout = React.createClass({
    render() {
        return (
            /*
            上面可以是header或者sidebar的component
            Router内部的元素都会放在main里面
            */
            <section className="main">
                { this.props.children || ''}
            </section>
        )
    }
});

const App = React.createClass({
    render() {
        return (
            <ReactRouter>
                <Route component={Layout}>
                    <Route path="/" component={Todo}></Route>
                </Route>
            </ReactRouter>
        );
    }
});

export default App;
