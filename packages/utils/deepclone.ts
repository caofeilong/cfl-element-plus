

// function deepclone(obj:object):object{

//     if(!(obj instanceof Object)){
//         console.info('--1-', obj)
//         return obj
//     }
//     let  newObj = {}

//     Object.entries(obj).forEach(([key, value])=>{
//         const newValue= deepclone(value)
//         newObj[key]= newValue
//     })


//     return newObj
// }


// var c = {c:'ee'}
// var a = {a:{b:'c',c},d:c}

// var b:any =deepclone(a)
// b.b='abc'
// console.info({
//     a:JSON.stringify(a),b:JSON.stringify(b),
//     c: a==b
// })


class  A { 
    name: string 
    age:string
}

class B extends  A {
    
    constructor(){
        super()
    }

    sex: string
}

let b = new B()

b.name='cfl'
b.age='20'
b.sex='ma'

console.info(b)


console.info(b.hasOwnProperty('name'))
console.info(b.hasOwnProperty('sex1'))


const  oc= Object.create(null)
console.info(oc)
console.info('--1-')