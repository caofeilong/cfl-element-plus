function Supper2(name){
    console.info('---1---')
    this.name =name
}

Supper2.prototype.getSuperName=function(){
    console.info(this.name)
}

function Sub2(name){
    Supper2.call(this, name)
    this.age=10
}

Sub2.prototype= new Supper2('')

Sub2.prototype.getAge=function(){
    console.info(this.age)
}

const sub2= new Sub2('cfltest')
sub2.getAge()
sub2.getSuperName()

console.info({sub2})
/**
 * sub2
 *  age: 10
 *  name:'cfltest'
 *  __proto__:
 *      name:'',
 *      getAge:(){}
 *      __proto__:
 *          getSuperName(){}
 */