import React, { Component } from 'react';
import classnames from 'classnames';

export default class ProjectFooter extends Component {
    constructor(props) {
        super(props);
        console.log('ProjectFooter==>', Object.keys(this.props));
    }
    getClassName(filterType) {
        // var _this = this;
        // console.log(this.props.filter, filterType)
        return classnames({
            selected: this.props.filter === filterType
        });
        
    }
    getStatus(status) {
        this.props.getFilterStatus(status);
        this.props.getStatus(status);
    }
    clearCompleted() {
        this.props.deleteItems(this.completedCount);
    }
    getCompletedCount() {
        let completedCount = [];
        this.props.list.forEach(function(item) {
            if (item.status === true) {
                completedCount.push(item);
            }
        });
        this.completedCount = completedCount;
        return completedCount.length > 0 ? 'Clear completed (' + completedCount.length + ')' : '';
    }
    render() {
        
        return(
            <footer id="footer">
                <span id="todo-count">{this.props.list.length} Left</span>
                <ul id="filters">
                    <li>
                        <a href="javascript:;"
                            className={ this.getClassName('SHOW_ALL') }
                            onClick={ this.getStatus.bind(this, 'SHOW_ALL') }>All</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            className={ this.getClassName('SHOW_ACTIVE') }
                            onClick = { this.getStatus.bind(this, 'SHOW_ACTIVE') }>Active</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            className={ this.getClassName('SHOW_COMPLETED')}
                            onClick={ this.getStatus.bind(this, 'SHOW_COMPLETED') }>Completed</a>
                    </li>
                </ul>
                <button id="clear-completed" onClick={ this.clearCompleted.bind(this) }>{this.getCompletedCount()}</button>
            </footer>
        );
    }
}