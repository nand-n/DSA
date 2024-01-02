function findSum(arr, weight){
    for(let i = 0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == weight){
                return [arr[i],arr[j]]
            }
        }
    }
    return -1

}

console.log(findSum([1,2,3,4 ,6 ,7 ,8] , 9));

//better way 

function findSumBetter(arr, weight){
    let hashTable ={}
    for(let i= 0; i<arr.length; i++){
        let currentElement = arr[i]
        let difference = weight - currentElement
        //check the right one already exists 
        if(hashTable[currentElement] != undefined){
            return [i,hashTable[weight-currentElement]]
        }else{
            hashTable[difference] = i
        }
    }
    return -1
}

console.log(findSumBetter([1,2,3,4 ,5] , 9));
