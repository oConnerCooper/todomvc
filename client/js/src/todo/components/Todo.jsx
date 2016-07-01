import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return(
            <div>
                <header id="header">
                    <h1>todos</h1>
                    <input id="new-todo" placeholder="What needs to be done?" />
                </header>
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