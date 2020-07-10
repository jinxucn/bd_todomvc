/*
 * @Author: Jin X
 * @Date: 2020-07-09 23:16:34
 * @LastEditTime: 2020-07-09 23:27:21
 */ 

var express = require('express');
var router = express.Router();

const dao = require("../db/dao.js");

router.get('/', (req, res) => {
  // res.send(`hello ${req.session.username}`);
  const name = req.session.username;
  if (name === undefined) {
    res.redirect('/');
    return;
  }
  dao.getAll(name, todos => {
    res.send(todos);
  });
});

router.post('/actions', (req, res) => {
  const name = req.session.username;
  if (name === undefined) {
    res.redirect('/');
    return;
  }
  var { action, todoId, content, completed } = { ...req.body };
  todoId = parseInt(todoId);
  completed = completed === "true" ? true : false;
  switch (action) {
    case ACTIONS.ADD_TODO: {
      dao.addTodo(name, todoId, content);
      break;
    };
    case ACTIONS.REMOVE_TODO: {
      dao.removeTodo(name, todoId);
      break;
    };
    case ACTIONS.REMOVE_COMPLETED: {
      dao.removeCompleted(name);
      break;
    };
    case ACTIONS.TOGGLE_TODO: {
      dao.toggleTodo(name, todoId, completed);
      break;
    };
    case ACTIONS.REMOVE_TODO: {
      dao.renameTodo(name, todoId, content);
      break;
    };
    case ACTIONS.TOGGLE_ALL: {
      dao.toggleAll(name, completed);
      break;
    };
  };
  res.send('ok')
});

module.exports = router;