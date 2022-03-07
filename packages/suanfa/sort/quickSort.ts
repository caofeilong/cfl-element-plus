function quickSort(arr){

    if(arr.length<2){
        return arr
    }
    var  basePoint= Math.floor(arr.length/2)
    var basePointV = arr.splice(basePoint,1)[0]
    var left =  []
    var right = []

    for(let i =0 ; i< arr.length; i++){
        if(i===basePointV){
            continue
        }
        if(arr[i]> basePointV){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([basePointV],quickSort(right))
}


console.info(quickSort([9,99,1,6,7,10,3,5,2,9]))



// var quickSort = function(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     var pivotIndex = Math.floor(arr.length / 2);
//     var pivot = arr.splice(pivotIndex, 1)[0];
//     var left = [];
//     var right = [];
  
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return quickSort(left).concat([pivot], quickSort(right));
//   };