/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:35:26

 */

import React from "react";
import ReactDOM from "react-dom";

import { Provider} from "react-redux";
import store from "./redux/store";

import TodoApp from "./todo/App";
import Logout from "./users/Logout";

import { saveState } from "./redux/localStorage";
import request from "./request"

window.onbeforeunload = () => {
    console.log(store.getState());
    saveState(store.getState());
};

const root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <Logout />
        <TodoApp />
    </Provider>,
    root
);

request.activeLog();

window.onload = () => {
    function timing(){
        const time = window.performance.timing;
        if (!time.loadEventEnd) {
            setTimeout(() => timing(), 200);
            return;
        }
        request.timingLog(time.loadEventEnd - time.navigationStart);
    };
    timing();
};