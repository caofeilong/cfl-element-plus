import {c} from './util.js'
function a(){
    if(location.href.indexOf('cfltest')){
        return 'cfltest'
    }
    return location.href
}

export default function main(){
    console.info('hello  tree sharking'+a()+c())
}

main()
a()