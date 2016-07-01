import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory'


// 引入页面的container
import Todo from './Todo';


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
            <Router history={createHashHistory}>
                <Route component={Layout}>
                    <Route path="/" component={Todo}></Route>
                </Route>
            </Router>
        );
    }
});
