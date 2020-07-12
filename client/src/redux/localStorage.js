/*
 * @Author: Jin X
 * @Date: 2020-07-07 12:43:55
 * @LastEditTime: 2020-07-12 11:36:21
 */ 

export const saveState = state => {
    if (window.localStorage) {
        window.localStorage.setItem(window.__USERNAME__||"dev",JSON.stringify({state,expired:new Date().getTime()+1000*3600*24}));
        // console.log(window.__USERNAME__,JSON.stringify({state,expired:new Date().getTime()+1000*3600*24}));
    }
}

export const loadState = () => {
    if (window.localStorage) {
        const record = JSON.parse(localStorage.getItem(window.__USERNAME__||"dev"));
        // console.log(state);
        if (record === null || record.expired<new Date().getTime()) {
            console.log('null');
            window.__LOADED__ = false;
            return undefined;
        }
        else {
            window.__LOADED__ = true;
            return record.state;
        }
    }
}