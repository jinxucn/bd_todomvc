/*
 * @Author: Jin X
 * @Date: 2020-07-12 11:36:59
 * @LastEditTime: 2020-07-12 11:48:20
 */ 

import React from "react";
import request from "../request";

const Logout = () => {
    return <button
        className="logout"
        onClick={() => {
            request.logout()
                .then(() => window.location = '/users');
        }}
    >
        Logout
    </button>
};

export default Logout;