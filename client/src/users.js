/*
 * @Author: Jin X
 * @Date: 2020-07-10 18:15:39
 * @LastEditTime: 2020-07-12 15:56:05
 */ 

import React from "react";
import ReactDOM from "react-dom";

import Login from "./users/Login";
import request from "./request"


const root = document.getElementById("root");
ReactDOM.render(
    <Login />,
    root
);


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