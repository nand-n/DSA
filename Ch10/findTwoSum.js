function findTwoSum(arr, sum){
    for(let i=0; i<arr.length; i++){
        for(let j =i+1; j<arr.length; j++){
            if(arr[j]+arr[i] ==sum){
                return true
            }
        }
    }
    return false
}