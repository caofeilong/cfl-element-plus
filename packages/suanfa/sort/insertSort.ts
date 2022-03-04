
function insertSort(arr){
    let [ ...noSortArray] =arr
    let sortArray =[Infinity]
    while(noSortArray.length>0){
        const currentValue = noSortArray[0]
        for(let i = 0; i < sortArray.length; i++){
            if(sortArray[i]>currentValue){
                sortArray.splice(i,0,currentValue)
                break
            }
        }
        noSortArray.shift()
    }
    sortArray.pop()
    return sortArray
}

console.info(insertSort([9,99,1,6,7,10,3,5,2,9]))