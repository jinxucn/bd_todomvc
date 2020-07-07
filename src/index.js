/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:35:26

 */

import React from "react";
import ReactDOM from "react-dom";

import { Provider} from "react-redux";
import store from "./redux/store";

import TodoApp from "./components/App";

import { saveState } from "./redux/localStorage";

window.onbeforeunload = (e) => {
    console.log(store.getState());
    saveState(store.getState());
}

const root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    root
);
