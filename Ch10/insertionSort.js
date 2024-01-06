function insertionSort(arr){
    let len = arr.length,value , i , j ; 
    for(i =0; i<len; i++){
        value= arr[i]
        for(j = i -1; j>-1 && arr[j] > value; j--){
            arr[j+1] = arr[j]

        }
        arr[j+1] = value
    }
    return arr
}

console.log(insertionSort([6,1,23,4,2,3]));