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

countCoinWaysWrapper([1,2,3],4);