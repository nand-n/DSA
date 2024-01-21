{/**
    Given a value/money n and an unlimited supply of each coin
    of different values , S ={S1, S2,...Sm} , of size M , how many
    ways can the change be made with out considering the order of the coin?

    Given N = 4 , M =3 , and S = {1,2,3} ,the number is 4 
*/}

//Returns the count of ways we can sum coinArr which have index like : [0,...,numCoins]

function countCoinWays(coinArr , numCoins , coinValue){
    if(coinValue == 0){
        //if the value reached zero , then solution is to not include any coin
        return 1
    }
    if(coinValue <0 || (numCoins<=0 && coinValue >=1)){
        //value is less than 0 means no solution
        //no coin left but coinValue left also means no solution 
        return 0
    }
    return countCoinWays(coinArr , numCoins-1 , coinValue) + countCoinWays(coinArr , numCoins, coinValue - coinArr[numCoins -1])
}
function countCoinWaysWrapper(coinArr , coinValue){
    return countCoinWays(coinArr , coinArr.length , coinValue)
}

console.log(countCoinWaysWrapper([1,2,3,4],5))
//BIGO : O(n^m)

//DP Approach 
{/**
    The matrix for the DP approach has the coinValue  number of 
    rows and the numCoins number of columns .
    Any Matrix at i and j represent the number of ways given a 
    coinValue of i and numCoins of j.
*/}

function countCoinWaysDP(coinArr , numCoins , coinValue){
    //creating the matrix 
    let dpMatrix = []
    for(let i = 0 ; i<=coinValue; i++){
        dpMatrix[i] = []
        for(let j=0; j<numCoins; j++){
            dpMatrix[i][j] = undefined
        }
    }
    for(let i =1; i<coinValue +1; i++){
        for(let j=0;j<numCoins; j++){
            let temp1 =0 , temp2=0;
            if(i-coinArr[j] >=0){
                //solutions including coinArr[j]
                temp1 =dpMatrix[i-coinArr[j]][j]
            }
            if(j>=1){
                //solutions execuding coinArr[j]
                temp2 = dpMatrix[i][j-1]
            }
            dpMatrix[i][j] = temp1+temp2
        }

    }
    return dpMatrix[coinValue][numCoins -1]
}

function countCoinWaysDPWrapper(coinArr , coinValue){
    return countCoinWaysDP(coinArr , coinArr.length , coinValue)
}

console.log(countCoinWaysDPWrapper([1,2,3],4));

//BigO : O(m*n)