const path = require('path')
const htlmWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.vue$/,
                // loader:'vue-loader',
                use:['babel-loader','vue-loader'],
                exclude:path.resolve(__dirname,'node_modules')
            },
            {
                test:/\.js$/,
                // loader:'vue-loader',
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules')
            }
        ]
    },
    plugins:[
        new htlmWebpackPlugin({template:'./src/index.html'}),
        new VueLoaderPlugin()
    ]
}