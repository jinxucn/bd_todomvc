/*
 * @Author: Jin X
 * @Date: 2020-07-02 16:35:26

 */

import React from "react";
import ReactDOM from "react-dom";

import { Provider} from "react-redux";
import store from "./redux/store";

import TodoApp from "./components/App";

const root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    root
);
