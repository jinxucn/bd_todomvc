/*
 * @Author: Jin X
 * @Date: 2020-07-08 13:22:43
 * @LastEditTime: 2020-07-09 23:27:39
 */ 
var express = require('express');
var router = express.Router();

const dao = require("../db/dao.js");
/* GET users listing. */
router.get('/', (req, res) => {
  if (req.session.username) {
    console.log('already login');
    res.send(`already login ${req.session.username}`);
  }
  else {
    console.log('please login');
    res.send('please login');
  }
});

router.post('/login', (req, res) => {
  if (req.session.username) {
    res.redirect('/');
    return;
  }
  const { name, pwd, signup } = { ...req.body };
  // console.log(signup);
  if (signup==='true') 
    dao.addUser(name,pwd, success => {
      if (success) {
        req.session.username = name;
        // res.send('<script>alert("signup")</script>');
        res.redirect('/');
      } else {
        res.send('<script>alert("this name has been occupied")</script>');
      }
    });
  else 
    dao.findUser(name, pwd, success => {
      if (success) {
        req.session.username = name;
        res.redirect('/todo');
      } else {
        res.send('<script>alert("invalid name or passcode")</script>');
      }
    });
});

module.exports = router;
