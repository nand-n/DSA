function quickSort(arr){
    return quickSortHelper(arr , 0 , arr.length -1)
}

function quickSortHelper(arr , left , right){
    let index
    if(arr.length > 1){
        index = partition(arr , left , right)
        if(left < index -1){
            quickSortHelper(arr , left , index-1)
        }
        if(index<right){
            quickSortHelper(arr, index , right)
        }
    }
    return arr
}

function partition(arr , left , right){
    let pivot= arr[Math.floor((right + left) /2)]
    while(left <= right){
        while(pivot > arr[left]){
            left ++
        }
        while(pivot <arr[right]){
            right --
        }
        if(left <= right){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left ++
            right--
        }
    }
    return left
}

console.log(quickSort([6,1,23,4,2,3]));