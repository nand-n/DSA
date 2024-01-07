function merge(leftA , rightA){

    let results = [] , leftIndex =0, rightIndex=0;

    while(leftIndex <leftA.length && rightIndex< rightA.length){
        if(leftA[leftIndex] <rightA[rightIndex]){
            results.push(leftA[rightIndex++])
        }else{
            results.push(rightA[rightIndex++])
        }
    }
    let leftRemains = leftA.slice(leftIndex),rightRemains =rightA.slice(rightIndex)
    return results.concat(leftRemains).concat(rightRemains)
}

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let midPoint = Math.floor((arr.length)/2),
        leftArray = arr.slice(0,midPoint),
        rightArray = arr.slice(midPoint);
        return merge(mergeSort(leftArray) , mergeSort(rightArray))

}