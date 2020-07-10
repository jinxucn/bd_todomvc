/*
 * @Author: Jin X
 * @Date: 2020-07-08 13:22:43
 * @LastEditTime: 2020-07-09 23:24:40
 */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");
var session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var todoRouter = require("./routes/todo");
const dao = require("./db/dao.js");
const ACTIONS = require("./db/constants.js")

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.engine('.html', ejs.);
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: "this is a todo app",
        name: "session_id",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1800000 },
        rolling: true,
    })
);

app.use('/users', usersRouter);
app.use('/todo', todoRouter);
// app.get('/login', (req, res) => {
//   if (req.session.username) {
//     console.log('already login');
//     res.send(`already login ${req.session.username}`);
//   }
//   else {
//     console.log('please login');
//     res.send('please login');
//   }
// });

// app.post('/login', (req, res) => {
//   if (req.session.username) {
//     res.redirect('/todos');
//     return;
//   }
//   const { name, pwd, signup } = { ...req.body };
//   console.log(signup);
//   if (signup==='true') 
//     dao.addUser(name,pwd, success => {
//       if (success) {
//         req.session.username = name;
//         // res.send('<script>alert("signup")</script>');
//         res.redirect('/todo');
//       } else {
//         res.send('<script>alert("this name has been occupied")</script>');
//       }
//     });
//   else 
//     dao.findUser(name, pwd, success => {
//       if (success) {
//         req.session.username = name;
//         res.redirect('/todo');
//       } else {
//         res.send('<script>alert("invalid name or passcode")</script>');
//       }
//     });
// });

// app.get('/todo', (req, res) => {
//   // res.send(`hello ${req.session.username}`);
//   const name = req.session.username;
//   if (name === undefined) {
//     res.redirect('/login');
//     return;
//   }
//   dao.getAll(name, todos => {
//     res.send(todos);
//   });
// });

// app.post('/todo', (req, res) => {
//   const name = req.session.username;
//   if (name === undefined) {
//     res.redirect('/login');
//     return;
//   }
//   var { action, todoId, content, completed } = { ...req.body };
//   todoId = parseInt(todoId);
//   completed = completed === "true" ? true : false;
//   switch (action) {
//     case ACTIONS.ADD_TODO: {
//       dao.addTodo(name, todoId, content);
//       break;
//     };
//     case ACTIONS.REMOVE_TODO: {
//       dao.removeTodo(name, todoId);
//       break;
//     };
//     case ACTIONS.REMOVE_COMPLETED: {
//       dao.removeCompleted(name);
//       break;
//     };
//     case ACTIONS.TOGGLE_TODO: {
//       dao.toggleTodo(name, todoId, completed);
//       break;
//     };
//     case ACTIONS.REMOVE_TODO: {
//       dao.renameTodo(name, todoId, content);
//       break;
//     };
//     case ACTIONS.TOGGLE_ALL: {
//       dao.toggleAll(name, completed);
//       break;
//     };
//   };
//   res.send('ok')
// });
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
