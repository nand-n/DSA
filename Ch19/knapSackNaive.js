function knapsackNaive(index , weights , values , target){
    let result = 0;
    if(index <= -1 || target <= 0){
        result = 0
    }else if(weights[index] > target){
        result = knapsackNaive(index-1 , weights , values , target)
    }else{
        //case 1
        let current = knapsackNaive(index -1 , weights , values , target)
        //case 2 
        let currentPlusOther  = values[index] + knapsackNaive(index -1 ,weights , values , weights[index])
        result = Math.max(current , currentPlusOther)
    }
    return result
}

var weights = [1,2,4,2,5],
    values  = [5,3,5,3,2],
    target = 10;
knapsackNaive(4,weights, values, target);