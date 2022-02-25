class Super3 {
    constructor(sex){
        this.sex=sex
    }
    sex:string

    asyHello(){
        console.info('hello world')
    }
}

class Sub3 extends Super3{

    constructor(name,age){
        super('ma')
        this.name=name
        this.age=age
    }
    
  name: string
  age: string


  asyHi(){
      console.info('hi')
  }
}



const sb3=new Sub3('cfl','age')


console.info(sb3)