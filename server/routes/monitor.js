/*
 * @Author: Jin X
 * @Date: 2020-07-12 13:46:08
 * @LastEditTime: 2020-07-12 19:51:30
 */

var express = require("express");
var router = express.Router();

const dao = require("../db/dao.js");

router.get("/", (req, res) => {
    dao.getLog().then((log) => {
        let { activeUsers, timingLog } = log;
        let activeUsersNum = activeUsers.length;
        let avgCostTime = Math.ceil(
            timingLog.reduce((sum, cur) => sum + cur.costTime, 0) /
                timingLog.length
        );
        res.send(`<p>In the last 24 hours <br> Active users: ${activeUsersNum} <br> Average time to open the pages: ${avgCostTime} ms</p>`)
        // res.end();
    });
});

router.get("/activeuser", (req, res) => {
    if (req.session.username)
        dao.activeLog(new Date().getTime(), req.session.username);
    res.end();
});

router.get("/timinglog", (req, res) => {
    let costTime = req.query.costTime;
    if (costTime) dao.timingLog(new Date().getTime(), parseInt(costTime));
    // console.log(costTime);
    // console.log("cost ",costTime," ms");
    res.end();
});

module.exports = router;
