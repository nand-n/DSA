function binarySearch(arr,n){
   let lowIndex = 0, highIndex = arr.length-1;
   while (lowIndex<=highIndex){
    let midIndex = Math.floor((lowIndex +highIndex)/2);
    if(arr[midIndex] == n){
        return true
    }else if(n>arr[midIndex]){
        lowIndex = midIndex
    }else{
        highIndex = midIndex
    }
   return false
   }
}

console.log(binarySearch([1,2,3,4], 1));