function Supper1(){
    this.name ='supername'
}

Supper1.prototype.getSuperName=function(){
    console.info(this.name)
}

function Sub1(){
    Supper1.call(this)
    this.age=10
}

// Sub.prototype= new Supper()

Sub1.prototype.getAge=function(){
    console.info(this.age)
}

const sub1= new Sub1()
sub1.getAge()
// sub1.getSuperName()

console.info({sub1})
/**
 * sub1
 *  age: 10
 *  name:'supername'
 *  __proto__:
 *      getAge:(){}
 */