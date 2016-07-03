import React, { Component } from 'react';

export default class ProjectCreater extends Component {
    constructor(props) {
        super(props);
        // console.log(Object.keys(this.props))
    }
    shouldComponentUpdate() {
        return false
    }
    handleBlur(e) {
        this.checkInput(e.currentTarget);
    }
    handleKeyup(e) {
        let keyCode = e.keyCode;
        if (keyCode === 13 || keyCode === 27) {
            this.checkInput(e.currentTarget);
        }
    }
    checkInput(input) {
        let text = input.value;
        if (text) {
            this.props.addItem({
                id: Date.now(),
                text
            });
            input.value = '';
        }
    }
    render() {
        return(
            <header id="header">
                <h1>todos</h1>
                <input
                    id="new-todo"
                    placeholder="What needs to be done?"
                    onBlur={ this.handleBlur.bind(this) }
                    onKeyUp={ this.handleKeyup.bind(this) }
                />
            </header>
        );
    }
};