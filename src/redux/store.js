/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:51:43
 * @LastEditTime: 2020-07-03 00:45:44
 */ 
import { createStore } from "redux";
import todoReducer from "./reducers"

export default createStore(todoReducer);