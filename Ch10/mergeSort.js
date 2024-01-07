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