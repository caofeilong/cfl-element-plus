
import reflecttest from "./reflecttest"
// import './extend1'
// import './extend2'
// import './extend3'
// import './extend4'
import './deepclone'
import {cloneDeep} from 'lodash'


var hi:any = function(){
    console.info('---1')
}

var a ={
    name:'cfl',
    age:'10',
    sayHi:hi,
    c:{e:'dd'}
}

var b = cloneDeep(a)


a.sayHi.hh=function(){
    console.info('---g-')
}


a.sayHi.hh()
b.c.e='ddd'
b.sayHi.hh()
console.info({a,b})

// reflecttest()

// function add(a:number,b:number):number{
//     return a+b
// }

// console.info(add(1,2))

// class A {
//     name: string
//     age: number
// }


// class B {
//     sex: string
//     name: string
//     sayHello(){
//        console.info( ' hello '+this.name)
//     }
// }

// let b = new B()

// b.name="cfl"
// // b.age=20
// b.sex="ma"

// // b.sayHello=function(){}

// console.info(b)

// b.sayHello()

// console.info( b.hasOwnProperty('sayHello'))



// const  oc= Object.create(null)
// console.info(oc)

// console.info('--1-')


// function OneClass() {
//     this.name = 'one';
// }

// function OtherClass() {
//     this.name = 'other';
// }


// // OneClass.apply()

// const  oc1= Object.create({name:'cfl'})
// console.info(oc1)
