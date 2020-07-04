/*
 * @Author: Jin X
 * @Date: 2020-07-03 17:51:15
 * @LastEditTime: 2020-07-05 01:21:44
 */

import React from "react";
import Addtodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import "./styles.css"

export default function TodoApp() {
    return <div className="todo-app">
        <Addtodo />
        <TodoList />
        <Filter />
    </div>;
}
