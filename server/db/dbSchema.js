/*
 * @Author: Jin X
 * @Date: 2020-07-08 21:26:45
 * @LastEditTime: 2020-07-12 20:01:41
 */ 

use todo;
db.createCollection("user");
db.user.createIndex({ name: 1 }, { unique: true });
// i.e.
// {
//     name : "Tom",
//     passcode : "1234"
// }
db.createCollection("todos");
db.todos.createIndex({ name: 1 , todoId:1 }, { unique: true });
// i.e.
// {
//     name : "Jack",
//     todoId : 1594540041830,
//     content : "read book",
//     completed : true
// }
db.createCollection("activeLog");
// i.e.
// {
//     timestamp : 1594538410773,
//     name : "Tom"
// }
db.createCollection("pageTimingLog");
// i.e.
// {
//     timestamp : 1594548613815,
//     costTime : 385
// }