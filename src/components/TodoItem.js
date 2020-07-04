/*
 * @Author: Jin X
 * @Date: 2020-07-02 13:54:03
 * @LastEditTime: 2020-07-05 00:57:38
 */

import React, { PureComponent } from "react";
import {connect} from "react-redux";
import {toggleTodo,removeTodo,renameTodo} from "../redux/actions"


class TodoItem extends PureComponent {
    constructor(props) {
        super (props);
        this.state = { completed: this.props.todo.completed,content: this.props.todo.content };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleRename = this.handleRename.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleToggle() {
        this.setState({  completed: !this.state.completed });
        this.props.toggleTodo(this.props.todo.id);
    }

    handleRemove() {
        this.props.removeTodo(this.props.todo.id);
    }

    handleChange(e) {
        this.setState({ content: e.target.value });
    }

    handleRename(e) {
        this.props.renameTodo(this.props.todo.id, e.target.value);
    }

    render() {
        return <li>
            <div className={this.state.completed?"active-todo":"completed-todo"}>
                {this.state.completed
                    ? <input type="checkbox" checked="checked" onClick={this.handleToggle} />
                    : <input type="checkbox" onClick={this.handleToggle}  />}
                <label>{this.state.content}</label>
                <button onClick={this.handleRemove} />
            </div>
            {(!this.state.completed) && <input value={this.state.content} onChange={this.handleChange}
                onKeyDown={e=>{e.keyCode===13&&e.target.blur();}} onBlur={this.handleRename} />}
        </li>
    }
};

export default connect(
    null,
    { toggleTodo, removeTodo, renameTodo}
)(TodoItem);