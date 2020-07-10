/*
 * @Author: Jin X
 * @Date: 2020-07-07 12:43:55
 * @LastEditTime: 2020-07-08 23:33:42
 */ 

export const saveState = state => {
    if (window.localStorage) 
        window.localStorage.setItem('state',JSON.stringify(state));
}

export const loadState = () => {
    if (window.localStorage) {
        const state = JSON.parse(localStorage.getItem("state"));
        // console.log(state);
        if (state === null) {
            console.log('null');
            return undefined;
        }
        else
            return state;
    }
}