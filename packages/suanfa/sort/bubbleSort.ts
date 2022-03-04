
function bubbleSort(arr){
    for(let i = 0 ; i< arr.length-1; i++){
        for(let j =0 ; j< arr.length-i-1;j++){
            const iValue =arr[j]
            const nextValue= arr[j+1]
            if(iValue>nextValue){
                arr[j]= nextValue
                arr[j+1]= iValue
            }
        } 
    }
    return arr
}

console.info(bubbleSort([1,6,7,10,3,5,2,9]))

// 总结 ：外层循环lenght-1 内层循环 length-1-i