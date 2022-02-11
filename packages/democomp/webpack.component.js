const path = require('path')
const htlmWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports={
    entry:{
        // main:'./src/main.ts',
        compa:'./src/compA/index.ts',
        compb:'./src/compB/index.ts',
        // comps:'./src/comps.ts'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'lib'),
        libraryTarget: 'commonjs2'
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.ts$/,
                loader:'ts-loader',
                options:{
                    // transpileOnly 为true的 时候是只转换不检查
                    // 通常为了提高打包速度会结合  ForkTsCheckerWebpackPlugin 这个插件单开一个进程进行类型检查
                    // transpileOnly: true,
                    appendTsSuffixTo: ['\\.vue$'],
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
     resolve: {
        extensions: [".ts", ".js",".vue"],
        alias:{
            '@':'/src',
            // '@cfl-element-plus/demovuets':path.resolve(__dirname, './')
        }
    },
    plugins:[
        new htlmWebpackPlugin({chunks:['main'],template:'./src/index.html'}),
        new VueLoaderPlugin()
        // ,
        // new ForkTsCheckerWebpackPlugin()
    ],
    externals:{
        'vue':'vue',
        '@/compA/compA.vue':'./compa.js'
    },
    optimization: {
        minimize:false
    }
}