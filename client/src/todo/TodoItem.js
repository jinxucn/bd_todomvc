/*
 * @Author: Jin X
 * @Date: 2020-07-02 13:54:03

 */

import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, removeTodo, renameTodo } from "../redux/actions";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.todo.completed,
            content: this.props.todo.content,
            editing: false,
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleRename = this.handleRename.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleToggle() {
        this.setState({ completed: !this.props.todo.completed });
        this.props.toggleTodo(this.props.todo.id);
    }

    handleRemove() {
        this.props.removeTodo(this.props.todo.id);
    }

    handleChange(e) {
        this.setState({ content: e.target.value });
    }

    handleRename(e) {
        this.setState({ editing: false });
        if (e.target.value !== "")
            this.props.renameTodo(this.props.todo.id, e.target.value);
        else this.props.removeTodo(this.props.todo.id);
    }

    render() {
        return (
            <li>
                <div
                    className={cx(
                        "todo-item",
                        !this.props.todo.completed
                            ? "active-todo"
                            : "completed-todo"
                    )}
                >
                    <div className="checkbox"
                        onClick={this.handleToggle}
                    >
                        <label
                            className={this.props.todo.completed?"checked":"unchecked"}
                        />
                        {/* <input
                            type="checkbox"
                            defaultChecked={this.props.todo.completed}
                            onChange={this.handleToggle}
                        /> */}

                    </div>
                    {/* {console.log(this.props.todo.completed)||this.props.todo.completed ? (
                        <input
                            type="checkbox"
                            checked="checked"
                            onChange={this.handleToggle}
                        />
                    ) : (
                        <input type="checkbox" onChange={this.handleToggle} />
                    )} */}
                    <div
                        className={cx(
                            "todo-content",
                            this.state.editing ? "edit-content" : "view-content"
                        )}
                        onDoubleClick={
                            this.props.todo.completed
                                ? () => false
                                : (e) => {
                                      this.setState({ editing: true });
                                      e.target.lastElementChild.focus();
                                  }
                        }
                    >
                        <label
                            onDoubleClick={
                                this.props.todo.completed
                                    ? () => false
                                    : (e) => {
                                          this.setState({ editing: true });
                                          e.target.nextElementSibling.focus();
                                          e.stopPropagation();
                                      }
                            }
                        >
                            {this.state.content}
                        </label>
                        {!this.props.todo.completed && (
                            <input
                                value={this.state.content || ""}
                                onChange={this.handleChange}
                                onKeyDown={(e) => {
                                    e.keyCode === 13 && e.target.blur();
                                }}
                                onDoubleClick={(e) => e.stopPropagation()}
                                onBlur={this.handleRename}
                            />
                        )}
                    </div>
                    <button onClick={this.handleRemove}>
                        <div></div>
                    </button>
                </div>
            </li>
        );
    }
}

export default connect(null, { toggleTodo, removeTodo, renameTodo })(TodoItem);
