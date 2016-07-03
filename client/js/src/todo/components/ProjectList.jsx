import React, { Component } from 'react';
import Item from './Item';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        console.log('ProjectList==>', Object.keys(this.props));
    }
    toggleAll(e) {
        this.props.updateItems({
            status: e.currentTarget.checked
        })
    }
    render() {
        let list = this.props.list;
        let updateItem = this.props.updateItem;
        let deleteItem = this.props.deleteItem;
        return(
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={ this.toggleAll.bind(this) } checked={ this.props.isAllCompleted }
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    {
                        list.map(function(item) {
                            return <Item
                                id={item.id}
                                key={item.id}
                                item={item}
                                updateItem={updateItem}
                                deleteItem={deleteItem}/>;
                        })
                    }
                </ul>
            </section>
        );
    }
}