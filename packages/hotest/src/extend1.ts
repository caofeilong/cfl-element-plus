function Supper(){
    this.name ='supername'
}

Supper.prototype.getSuperName=function(){
    console.info(this.name)
}

function Sub(){
    this.age=10
}

Sub.prototype= new Supper()

Sub.prototype.getAge=function(){
    console.info(this.age)
}

const sub= new Sub()
sub.getAge()
sub.getSuperName()

console.info({sub})
/**
 * sub
 *  age: 10
 *  __proto__:
 *      name:'supername'
 *      getAge:(){}
 *      __proto__:
 *          getSuperName(){}
 */