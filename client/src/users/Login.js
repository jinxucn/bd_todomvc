/*
 * @Author: Jin X
 * @Date: 2020-07-10 17:32:49

 */ 

import React, { useState } from "react";
import request from "../request";

import "./styles.css"

const Login = () => {
    const [signup, setSignup] = useState(false);
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    return <div className="login-wrap">
        <input
            className="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e=>setUsername(e.target.value)}
        />
        <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
        />
        <div className="switcher">
            {signup
                ? <span>Already have an account?   <a onClick={() => setSignup(false)}>To login</a></span>
                : <span>No account?   <a onClick={() => setSignup(true)}>To signup</a></span>}
        </div>
        <button className="submit"
            onClick={() => request.login(username, password, signup)
                .then(res => {
                    console.log(res);
                    let { success, msg } = res;
                    success 
                        ? window.location = '/todo'
                        : alert(msg)
                })}>
            {signup? "signup": "login"}
        </button>
    </div>
}

export default Login;