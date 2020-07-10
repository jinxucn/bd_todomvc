/*
 * @Author: Jin X
 * @Date: 2020-07-10 17:32:49
 * @LastEditTime: 2020-07-10 19:45:47
 */ 

import React, { useState } from "react";

import "./styles.css"

const Login = () => {
    const [signup, setSignup] = useState(false);
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    console.log(signup);
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
            type="text"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
        />
        <div className="switcher">
            {signup
                ? <span>Already have an account?   <a onClick={() => setSignup(false)}>To login</a></span>
                : <span>No account?   <a onClick={() => setSignup(true)}>To signup</a></span>}
        </div>
        <button className="submit">
            {signup? "signup": "login"}
        </button>
    </div>
}

export default Login;