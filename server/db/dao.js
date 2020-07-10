/*
 * @Author: Jin X
 * @Date: 2020-07-08 16:41:30

 */ 
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'todo';

const dao = {};

dao.addUser = (name,passcode, callback) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('user');
        col.findOne({ name })
            .then(res => {
                if (res === null) {
                    col.insertOne({name,passcode});
                    console.log(`add a user ${name}`)
                    return true;
                } else {
                    console.log(`\"${name}\" has been occupied`);
                    return false;
                }
            })
            .then(res => client.close(() => callback(res)))
            .catch(err => { console.log(err); client.close(() => callback(false)); });
    });
};

dao.findUser = (name,passcode,callback) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('user');
        col.findOne({ name, passcode })
            .then(res => {
                if (res === null) {
                    console.log('no such user in db');
                    return false;
                } else {
                    console.log('found user in db');
                    return true;
                }
            })
            .then(res => client.close(() => callback(res)))
            .catch(err => { console.log(err); client.close(() => callback(false)); });
    });
    
}

dao.addTodo = (name, todoId, content) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.insertOne({name,todoId,content,completed:false})
            .then(() => { console.log(`add a todo for ${name}`); client.close() })
            .catch(err => { console.log(err); client.close(); });
    });
};

dao.removeTodo = (name, todoId) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.deleteOne({ name, todoId})
            .then(() => { console.log(`remove todo ${todoId} for ${name}`); client.close() })
            .catch(err => { console.log(err); client.close(); });
    });
};

dao.removeCompleted = name => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.deleteMany({ name,completed:true })
            .then(() => { console.log(`remove completed todos for ${name}`); client.close() })
            .catch(err => { console.log(err); client.close(); });
    });
};

dao.toggleTodo = (name, todoId, completed) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.updateOne({ name, todoId }, { $set: { completed } })
            .then(() => { console.log(`toggle todo ${todoId} for ${name}`); client.close() })
            .catch(err => { console.log(err); client.close(); });
    });
};

dao.renameTodo = (name, todoId, content) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.updateOne({ name, todoId }, { $set: { content } })
            .then(() => { console.log(`rename todo ${todoId} for ${name}`); client.close() })
            .catch(err => { console.log(err); client.close(); });
    });
};

dao.toggleAll = (name, completed) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.updateMany({ name }, { $set: { completed } })
            .then(() => { console.log(`toggle all todos for ${name}`); client.close() })
            .catch(err => { console.log(err); client.close(); });
    });
};

dao.getAll = (name, callback) => {
    MongoClient.connect(url, (err, client) => {
        const col = client.db(dbName).collection('todos');
        col.find({ name },{projection:{_id:0,name:0}}).toArray()
            .then(res => { console.log(`get all todos for ${name}`); client.close(()=>callback(res));})
            .catch(err => { console.log(err); client.close(()=>callback([]));});
    });
};

module.exports = dao;

