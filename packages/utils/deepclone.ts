

export default function deepClone(input){
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