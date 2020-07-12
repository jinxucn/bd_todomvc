/*
 * @Author: Jin X
 * @Date: 2020-07-03 17:51:15
 * @LastEditTime: 2020-07-11 18:39:02
 */

import React,{useEffect} from "react";
import Addtodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import {getAll} from "../redux/actions";
import request from "../request";
import "./styles.css"

export default function TodoApp() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!window.__LOADED__) {
            console.log('request todo from server');
            request.getAll()
                .then(res => {
                    let { success, data } = res;
                    if (!success) {
                        window.location = "/user";
                        return; 
                    }
                    let allIds = [];
                    let allTodos = {};
                    data.forEach(d => {
                        let { todoId, content, completed } = d;
                        allIds.push(todoId);
                        allTodos[todoId] = { content, completed };
                    });
                    // console.log(allIds, allTodos);
                   dispatch(getAll(allIds, allTodos)); 
                })
        }
    },[]);

    return <div className="todo-app">
        <Addtodo />
        <TodoList />
        <Filter />
    </div>;
}
