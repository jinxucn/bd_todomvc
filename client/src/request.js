/*
 * @Author: Jin X
 * @Date: 2020-07-10 20:39:42
 * @LastEditTime: 2020-07-12 14:28:36
 */ 

import axios from 'axios';
import { ACTIONS } from './redux/constants';

const request = {};

request.login = (name, pwd, signup) => axios.post(
    '/users/login',
    { name, pwd, signup }).then(res=>res.data);

request.getAll = () => axios.post(
    '/todo/actions',
    { action: ACTIONS.GET_ALL }).then(res=>res.data);

request.addTodo = (todoId, content) => axios.post(
    '/todo/actions',
    { action: ACTIONS.ADD_TODO, todoId, content }
);

request.removeTodo = (todoId) => axios.post(
    '/todo/actions',
    { action: ACTIONS.REMOVE_TODO, todoId }
);

request.removeCompleted = () => axios.post(
    '/todo/actions',
    { action: ACTIONS.REMOVE_COMPLETED}
);

request.toggleTodo = (todoId,completed) => axios.post(
    '/todo/actions',
    { action: ACTIONS.TOGGLE_TODO, todoId, completed}
);

request.renameTodo = (todoId,content) => axios.post(
    '/todo/actions',
    { action: ACTIONS.RENAME_TODO, todoId, content}
);

request.toggleAll = (completed) => axios.post(
    '/todo/actions',
    { action: ACTIONS.TOGGLE_ALL, completed}
);

request.logout = () => axios.get(
    '/users/logout'
);

request.activeLog = () => axios.get(
    '/monitor/activeuser'
)

request.timingLog = costTime => axios.get(
    '/monitor/timinglog',
    { params: { costTime } }
);

export default request;