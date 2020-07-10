/*
 * @Author: Jin X
 * @Date: 2020-07-03 00:59:16

 */ 
import React from 'react';
import TodoItem from "./TodoItem"
import { FILTERS } from "../redux/constants"
import { useSelector } from "react-redux";

function getFilteredTodo(ids, todos, filter) {
    let allTodos = ids.map(id=>({...todos[id],id}))
    switch (filter) {
        case FILTERS.ACTIVE:
            return allTodos.filter(todo => !todo.completed);
        case FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case FILTERS.ALL:
            return allTodos;
        default:
            return allTodos;
    }
}

const TodoList = () => {
    // let { ids, todos, filter } = useSelector(state => {...state});
    let { allIds, allTodos,filter } = { ...useSelector(state => state) };
    let filteredTodos = getFilteredTodo(allIds,allTodos, filter);
    return <ul className="todo-list">
        {filteredTodos && filteredTodos.length
            ? filteredTodos.map(todo => {
                return <TodoItem key={`todo-${todo.id}`} todo={todo} />
            })
            : "No todos yet!"}
    </ul >
};

export default TodoList;