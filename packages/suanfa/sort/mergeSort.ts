
function merge(left, right){
    let li=0
    let ri=0
    let result =[]

    while(li<left.length && ri<right.length){
        if(left[li]<right[ri]){
            result.push(left[li++])  
        }else {
            result.push(right[ri++])
        }
    }
    return result.concat(left.slice(li)).concat(right.slice(ri))
}

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const margin=Math.floor( arr.length / 2)
    const left=  arr.slice(0,margin)
    const right = arr.slice(margin)
    return merge(mergeSort(left), mergeSort(right))
}

console.info(mergeSort([9,99,1,6,7,10,3,5,2,9]))

/**
 * 归并排序
 * 先把数组使用二分法进行分割  需要分  n-1 次
 * 
 */