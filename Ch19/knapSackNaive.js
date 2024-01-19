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

//DP Approach

function knapsackDP(index , weights , values , target  , matrixDP){
    let result =0;
    //DP part 
    if(matrixDP[index] + '-' + target){
        result  =0
    }else if(weights[index] > target){
        result = knapsackDP(index -1 , weights , values , target , matrixDP)
    }else{
        let current = knapsackDP(index -1 , weights , values , target) ,
        currentPlusOther = values[index] + knapsackDP(index -1 , weights , values , target - weights[index])
        result = Math.max(current , currentPlusOther)
    }
    matrixDP[index + '-' + target] = result
    return result
}
//Time Complexity : O(n*w)