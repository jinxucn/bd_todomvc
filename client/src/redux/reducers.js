/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:59:58
 * @LastEditTime: 2020-07-08 23:33:25
 */

import { FILTERS, ACTIONS } from "./constants";
import {loadState} from "./localStorage"


const initialState = loadState() || {
    allIds: [],
    allTodos: {},
    filter: FILTERS.ALL,
};

// console.log('here');

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO: {
            const { id, content } = action.payload;
            // console.log(id, content);
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
        };
        case ACTIONS.REMOVE_TODO: {
            const { id } = action.payload;
            // delete state.allTodos[id];
            const newTodos = Object.assign({}, state.allTodos);
            delete newTodos[id];
            return {
                ...state,
                allIds: state.allIds.filter((e) => e !== id),
                allTodos: newTodos,
            };
        };
        case ACTIONS.CHANGE_TODO: {
            const { id, content } = action.payload;
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
        };
        case ACTIONS.TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        ...state.allTodos[id],
                        completed: !state.allTodos[id].completed,
                    },
                },
            };
        };
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
                };
            allIds.forEach((id) => newTodos[id].completed = allCompleted ? false : true);
            return {
                ...state,
                allTodos: newTodos,
            };
        };
        case ACTIONS.REMOVE_COMPLETED: 
            const { allIds, allTodos } = { ...state };
            const newTodos = {}
            const newIds = allIds.filter(id => !allTodos[id].completed);
            newIds.forEach(id => newTodos[id] = allTodos[id]);
            return {
                ...state,
                allIds: newIds,
                allTodos: newTodos,
            }
        default:
            return state;
    }
}
