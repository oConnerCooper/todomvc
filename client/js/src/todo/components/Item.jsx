import React, { Component } from 'react';
import classnames from 'classnames';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onEdit: false
        }
    }
    toggleTodo(e) {
        this.updateItem({
            status: e.currentTarget.checked
        })
    }
    updateItem(options = {}) {
        this.props.updateItem(Object.assign({ id: this.props.id }, options))
    }
    handleDblclick() {
        let editor = this.refs.editor;
        editor.value = this.props.item.text;
        this.setState({
            onEdit: true
        })
        setTimeout(() => editor.focus(), 0)
    }
    destroy() {
        this.props.deleteItem(this.props.id)
    }
    handleBlur(e) {
        this.checkEditor(e.currentTarget)
    }
    handleKeyup(e) {
        let { keyCode, currentTarget } = e
        if (keyCode === 13 ||  keyCode === 27) {
            this.checkEditor(currentTarget)
        }
    }
    checkEditor(input) {
        let text = input.value
        if (text && text !== this.props.text) {
            this.updateItem({ text })
        } else if (!text) {
            this.destroy()
        }
        this.setState({
            onEdit: false
        })
    }
    render() {
        let { id, text, displayTime, status, display } = this.props.item;
        let className = classnames({
            completed: status,
            editing: this.state.onEdit
        });
        // let show = display ? { 'display': 'block' } : { 'display': 'none' };
        return(
            <li key={ id } className={ className } title={ displayTime } >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={ this.toggleTodo.bind(this) }
                        checked={ status } />
                    <label onDoubleClick={ this.handleDblclick.bind(this) }>{ text }</label>
                    <button className="destroy" onClick={ this.destroy.bind(this) }></button>
                </div>
                <input
                    className="edit"
                    onBlur={ this.handleBlur.bind(this) }
                    onKeyUp={ this.handleKeyup.bind(this) }
                    ref="editor" />
            </li>
        );
    }
}