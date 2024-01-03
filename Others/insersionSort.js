function insersionSort(arr){
  for(i=1; i<arr.length; i++){
    let numberToInsert = arr[i]
    let j = i-1
    while(j>=0 && arr[j]> numberToInsert){
      arr[j+1] = arr[j]
      j=j-1
    }
    arr[j+1] = numberToInsert
  }
}

let arr =[20,22,5,-5 ,-3 ,2]
insersionSort(arr) 
console.log(arr);