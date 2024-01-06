function quickSelectInPlace(A ,l , h,k){
    let p = partition(A , l , h)
    if(p==(k-1)){
        return A[p]
    }else if(p>(k-1)){
        return quickSelectInPlace(A , l , p -1,k)
    }else {
        return quickSelectInPlace(A , p +1, h , k)
    }
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
function medianQucikSort(array){
    return quickSelectInPlace(array , 0 , array.length -1 , Math.floor(arr.length/2))
}