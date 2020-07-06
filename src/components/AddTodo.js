/*
 * @Author: Jin X
 * @Date: 2020-07-03 00:57:33
 * @LastEditTime: 2020-07-06 20:19:30
 */

import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");

    return (
        <div className="todo-add">
            <input
                placeholder="add a todo"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        if (e.target.value) {
                            setContent("");
                            dispatch(addTodo(e.target.value));
                        }
                    }
                }}
            />
        </div>
    );
};

export default AddTodo;
