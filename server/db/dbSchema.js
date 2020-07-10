/*
 * @Author: Jin X
 * @Date: 2020-07-08 21:26:45
 * @LastEditTime: 2020-07-08 22:51:39
 */ 

use todo;
db.createCollection("user");
db.user.createIndex({ name: 1 }, { unique: true });

db.createCollection("todos");
db.todos.createIndex({ name: 1 , todoId:1 }, { unique: true });