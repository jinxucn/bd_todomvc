/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:53:38
 * @LastEditTime: 2020-07-08 23:30:30
 */

import { ACTIONS } from "./constants";
// let todoId = 0;

export const addTodo = content => ({
    type: ACTIONS.ADD_TODO,
    payload: {
        id: new Date().getTime(),
        content: content,
    },
});

export const removeTodo = id => ({
    type: ACTIONS.REMOVE_TODO,
    payload:{ id }
    
})

export const renameTodo = (id, content) => ({
    type: ACTIONS.CHANGE_TODO,
    payload: { id, content }
})

export const toggleTodo = id => ({
    type: ACTIONS.TOGGLE_TODO,
    payload: { id }
})

export const setFilter = filter => ({
    type: ACTIONS.SET_FILTER,
    payload: {filter}
})

export const toggleAll = () => ({
    type:ACTIONS.TOGGLE_ALL,
})

export const removeCompleted = () => ({
    type: ACTIONS.REMOVE_COMPLETED,
})