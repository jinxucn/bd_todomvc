/*
 * @Author: Jin X
 * @Date: 2020-07-03 00:57:33
 * @LastEditTime: 2020-07-05 00:53:56
 */

import React,{ useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");

    return (
        <div className="todo-input">
            <input
                onChange={(e) => setContent(e.target.value)}
                value={content}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        setContent("");
                        dispatch(addTodo(e.target.value));
                    }
                }}/>
        </div>
    );
};

export default AddTodo;
