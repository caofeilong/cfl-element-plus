


function  selectionSort(arr){
    for(let i = 0 ; i< arr.length-1 ; i++){
        let moveIndex=0
        for(let j = 0 ; j< arr.length-i ; j++){
            if(arr[moveIndex]< arr[j]){
                moveIndex= j
            }
        }
        const moveValue =arr[moveIndex]
        const last =arr[arr.length-i-1]
        arr[arr.length-i-1] = moveValue
        arr[moveIndex] = last
    }
    return arr
}


console.info(selectionSort([1,6,7,10,3,5,2,9]))