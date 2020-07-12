/*
 * @Author: Jin X
 * @Date: 2020-07-10 15:16:40
 * @LastEditTime: 2020-07-11 15:13:42
 */ 

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => ({
    entry: {
        app:"./src/app.js",
        users:"./src/users.js"
    },
    output: {
        path: path.resolve(__dirname, '../server/public'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:"babel-loader"
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        		filename:"app.html",
        		template: "./public/index.html",
        		chunks:["app"]
            }),
        new HtmlWebpackPlugin({
        		filename:"users.html",
        		template: "./public/index.html",
        		chunks:["users"]
            })
		// new HtmlWebpackPlugin({
        // 		filename:"about.html",
        // 		template: "./src/template.html",
        // 		chunks:["index"]
        // 	})
    ],
    devServer: {
        // open: true,
        contentBase: path.resolve(__dirname, '../server/public'),
        quiet: false,
        noInfo: false,
        hot: true,
        inline: true,
        lazy:false,
        progress: true,
        // port:'80'
        proxy: {
            '/login': {
                target: 'http://localhost:3000/users/',
                // pathRewrite: {"^/api": "/login"},
                changeOrigin: true,
                secure: false
            },
            '/todo': {
                target: 'http://localhost:3000/',
                pathRewrite: {"^/todo": "/todo/actions"},
                changeOrigin: true,
                secure: false
            }
        }
    }
})