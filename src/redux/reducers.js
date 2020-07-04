/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:59:58
 * @LastEditTime: 2020-07-05 00:52:53
 */ 
import { FILTERS, ACTIONS } from "./constants";

const initialState = {
    allIds: [],
    allTodos: {},
    filter: FILTERS.ALL
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO: {
            let { id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case ACTIONS.REMOVE_TODO: {
            let { id } = action.payload;
            // delete state.allTodos[id];
            let newTodos = Object.assign({}, state.allTodos);
            delete newTodos[id];
            return {
                ...state,
                allIds: state.allIds.filter(e => e !== id),
                allTodos: newTodos
            }
        }
        case ACTIONS.CHANGE_TODO: {
            let { id, content } = action.payload;
            return {
                ...state,
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            }
        }
        case ACTIONS.TOGGLE_TODO: {
            let { id } = action.payload;
            return {
                ...state,
                allTodos: {
                    ...state.allTodos,
                    [id]: {
                        ...state.allTodos[id],
                        completed: !state.allTodos[id].completed
                    }
                }
            };
        }
        case ACTIONS.SET_FILTER: {
            return {
                ...state,
                filter: action.payload.filter,
            };
        }
        default:return state;
    }
};
