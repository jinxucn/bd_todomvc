/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:59:58
 * @LastEditTime: 2020-07-13 14:23:24
 */

import { FILTERS, ACTIONS } from "./constants";
import { loadState } from "./localStorage";
import request from "../request";

const initialState = loadState() || {
    allIds: [],
    allTodos: {},
    filter: FILTERS.ALL,
};

// console.log('here');

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_ALL: {
            const { allIds, allTodos } = action.payload;
            return {
                ...state,
                allIds: allIds,
                allTodos: allTodos,
            };
        };
        case ACTIONS.ADD_TODO: {
            const { id, content } = action.payload;
            // console.log(id, content);
            request.addTodo(id, content);
            return {
                ...state,
                allIds: [...state.allIds, id],
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        content,
                        completed: false,
                    },
                },
            };
        }
        case ACTIONS.REMOVE_TODO: {
            const { id } = action.payload;
            // delete state.allTodos[id];
            const newTodos = Object.assign({}, state.allTodos);
            delete newTodos[id];
            request.removeTodo(id);
            return {
                ...state,
                allIds: state.allIds.filter((e) => e !== id),
                allTodos: newTodos,
            };
        }
        case ACTIONS.RENAME_TODO: {
            const { id, content } = action.payload;
            request.renameTodo(id, content);
            return {
                ...state,
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        content,
                        completed: false,
                    },
                },
            };
        }
        case ACTIONS.TOGGLE_TODO: {
            const { id } = action.payload;
            const tg = !state.allTodos[id].completed;
            request.toggleTodo(id, tg);
            return {
                ...state,
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        ...state.allTodos[id],
                        completed: tg
                    },
                },
            };
        }
        case ACTIONS.SET_FILTER:
            return {
                ...state,
                filter: action.payload.filter,
            };
        case ACTIONS.TOGGLE_ALL: {
            const { allIds, allTodos } = { ...state };
            const newTodos = Object.assign({}, allTodos);
            let allCompleted = true;
            for (let id of allIds)
                if (allTodos[id].completed === false) {
                    allCompleted = false;
                    break;
                }
            request.toggleAll(!allCompleted);
            allIds.forEach( id => newTodos[id].completed = !allCompleted);
            return {
                ...state,
                allTodos: newTodos,
            };
        }
        case ACTIONS.REMOVE_COMPLETED:
            const { allIds, allTodos } = { ...state };
            const newTodos = {};
            const newIds = allIds.filter((id) => !allTodos[id].completed);
            newIds.forEach((id) => (newTodos[id] = allTodos[id]));
            request.removeCompleted();
            return {
                ...state,
                allIds: newIds,
                allTodos: newTodos,
            };
        default:
            return state;
    }
}
