function swap(arr , index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function selectionSort(arr){
    let len =arr.length , min;
    for(let i= 0; i<len; i++){
        min = i
        for(let j = i+1; j<len; j++){
            if(arr[j] <arr[min]){
                min= j
            }
        }
        if(i!=min){
            swap(arr, i , min)
        }
    }
    return arr
}

console.log(selectionSort([6,1,23,4,2,3]));