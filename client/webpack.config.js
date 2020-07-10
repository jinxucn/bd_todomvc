/*
 * @Author: Jin X
 * @Date: 2020-07-10 15:16:40
 * @LastEditTime: 2020-07-10 19:43:05
 */ 

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => ({
    entry: {
        app:"./src/app.js",
        users:"./src/users.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        open:true
    }
})