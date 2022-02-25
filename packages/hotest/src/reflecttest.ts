


class Dog {
    constructor(name,age){
        // console.info('--2--')
        this.name= name
        this.age=age
    }
    name:string
    age:string
    
    run(){
        console.info(this.name+' run')
    }
}

// function test(){
//     console.info('1')
// }

export default function(){
    const dog = Reflect.construct(Dog,['yz',2])
    console.info(dog)
}