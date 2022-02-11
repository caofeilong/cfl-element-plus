import {fileURLToPath} from 'url'
import {dirname, resolve} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
    entry:resolve(__dirname,'src/index.js'),
    output:{
        filename:"main.js",
        path:resolve(__dirname,'dist')
    },
    // mode: 'development',
    mode: 'production',
    // devtool: false,
    // optimization: {
    //     usedExports: true,
    //     // sideEffects: false
    // },
}