import React, { Component } from 'react';
// 创建项目输入的container
import ProjectCreater from '../containers/ProjectCreater'

export default class Todo extends Component {
    render() {
        return(
            <div>
                <ProjectCreater></ProjectCreater>
                <section id="main">
                    <input id="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul id="todo-list">
                        <li>
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label >test</label>
                                <button className="destroy" ></button>
                            </div>
                            <input className="edit" />
                        </li>
                    </ul>
                </section>
                <footer id="footer">
                    <span id="todo-count">xxx</span>
                    <ul id="filters">
                        <li>
                            <a href="#/" className="">All</a>
                        </li>
                        <li>
                            <a href="#/active"  className="">Active</a>
                        </li>
                        <li>
                            <a href="#/completed"  className="">Completed</a>
                        </li>
                    </ul>
                    <button id="clear-completed" >清空</button>
                </footer>
            </div>
        );
    }
}