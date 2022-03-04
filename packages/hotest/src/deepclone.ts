function deepClone(input){
    let result 
    if(Array.isArray(input)){
        result=[] 
    }else if(typeof input === 'object'){
        result ={}
    }else{
        return input
    }
    for(let key in input){
        const newv=deepClone(input[key])
        result[key] = newv
    }
    return result
}


let a ={b:{name:'cc'}}

let c=[1,2,3,{age:'22'}]

const e = deepClone(a)
e.b.name='fff'

console.info({a,e})


const f = deepClone(c)

f[3].age='55'

console.info({f,c})