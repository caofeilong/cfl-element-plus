
const {resolve} = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.ts',
    output:{
        filename:'bundle.js',
        path:resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:['ts-loader']
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:'./index.html'
        })
    ],
    resolve:{
        extensions:['.js','.ts']
    },
    mode:'development',
    devServer:{
        static:{
            directory:resolve(__dirname,'dist')
        },
        compress:true,
        port:'8080',
        open:true
    }
}