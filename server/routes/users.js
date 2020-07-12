/*
 * @Author: Jin X
 * @Date: 2020-07-08 13:22:43
 * @LastEditTime: 2020-07-12 14:15:58
 */ 
var path = require("path");
var express = require('express');
var router = express.Router();

const dao = require("../db/dao.js");
/* GET users listing. */
router.get('/', (req, res) => {
  if (req.session.username) {
    console.log('already login');
    // res.send(`already login ${req.session.username}`);
    res.redirect('/todo');
  }
  else {
    console.log('please login');
    // res.send('<script>console.log("please login")</script>');
    res.sendFile(path.join(__dirname,"../public/users.html"))
  }
});

router.get('/logout', (req, res) => {
  delete req.session.username;
  res.end();
});

router.post('/login', (req, res) => {
  if (req.session.username) {
    // res.redirect('/todo');
    res.send({success:true})
    return;
  };
  const { name, pwd, signup } = { ...req.body };
  console.log(signup);
  if (signup) 
    dao.addUser(name,pwd, success => {
      if (success) {
        req.session.username = name;
        res.send({success});
      } else {
        res.send({success,msg:"This name has been occupied"});
      }
    });
  else 
    dao.findUser(name, pwd, success => {
      if (success) {
        req.session.username = name;
        res.send({success});
      } else {
        res.send({success,msg:"Invalid name or passcode"});
      }
    });
});

module.exports = router;
