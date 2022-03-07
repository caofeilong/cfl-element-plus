


(Promise as any).myAll=function(promises){
    return  new Promise((res, rej)=>{
        let returnData =[]
        let count =0
        promises.forEach((item,i)=>{
            item.then((data)=>{
                count++
                returnData[i]=data
                if(count===promises.length){
                    res(returnData)
                }
            }).catch((e) => {
                rej(e)
            })
        })    
    })
}


function genPromise(time, data){
    return new Promise((res)=>{
        setTimeout(()=>{
        res(data)
        },time)
    })
}
// @ts-ignore
Promise.myAll([
  genPromise(1000,1),
  genPromise(1100,2),
  genPromise(500,3)
]).then(data=>{
    console.info(data)
})



// Promise.abc([])
