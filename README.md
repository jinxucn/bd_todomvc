# TodoMVC based on Reactjs & Expressjs

A todo web application demo using React as frontend and Express as backend.



## 依赖

- node.js v12.18.0+.
- webpack & babel 用以前端文件打包
- mongodb 用以后端数据库





## 项目结构

```
|-- Dockerfile	//docker config
|-- client		//fronend
|   |-- package.json	
|   |-- public			//react root
|   |-- src	
|   |   |-- app.js		//script entry for "/todo" page
|   |   |-- redux		//redux related, i.e. reducer, actions...
|   |   |-- request.js	//api related, using axios for ajax request
|   |   |-- todo		//react components for todo application page
|   |   |-- users		//react components for users page
|   |   `-- users.js	//script entry for "/users" page
|   `-- webpack.config.js	//webpack config
`-- server		//backend
    |-- app.js			//main funtionalities
    |-- bin				//project entry
    |-- db				//database related, i.e. schema,DAO...
    |-- package.json	
    |-- pm2.json		//pm2 config
    |-- public			//public static files, already bundled
    |-- routes			
    |   |-- monitor.js	//for "/monitor"
    |   |-- todo.js		//for "/todo"
    |   `-- users.js	//for "/users"
    `-- views			//a template used for server side render
```



## 功能

### "/users":

- 用户可以登录或注册
- 登录或注册后，通过session_id保持登录状态

### "/todo":

- 基本操作：可对todo清单进行增、删、改、标记
- 用户可点击“ALL”按钮标记所有，点击“remove completed”删除所有已完成todo
- 本地储存：每次操作均会向服务器发出请求，服务器会执行相应的数据库操作，但本地页面也会保存一份todo清单的state，每次登录时检查是否存在本地数据且未过期，若存在则直接渲染本地数据，否则向服务器发起getAll请求获取用户的todo清单

### "/monitor":

- 返回过去24小时活跃用户数量以及平均网页打开时间

- 每次有效的用户登录会记录在数据库里，记录为｛时间戳，用户名｝

- 每次有效网页打开会记录一个costTime并传给后端, 如下， 记录为｛时间戳，costTime｝

  ```javascript
  costTime=performance.timing.loadEventEnd-performance.timing.navigationStart
  ```

  

## 数据库

- 数据库操作使用的是原生的MongoClient库
- "/server/db/dbSchema.js"里给出了建库建表的代码以及schema样例



## 前端Data Flow

- 主要用到了redux以及react-redux库，全局保存todo清单的state
- 局部react组件大部分用了hook写法，todoItem用了class写法



