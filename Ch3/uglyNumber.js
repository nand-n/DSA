{/**
    Ugly numbers are whose only prime factors are 2 ,3 or 5 
    Probem : find the first 11 ugly numbers by conversion , 1
        is included  
*/}

function maxDivide (number , divisor){
    while (number % divisor == 0){
        number /=divisor
    }
    return number
}

function isUgly (number){
    
    number = maxDivide(number , 2)
    number = maxDivide(number , 3) 
    number = maxDivide(number , 5)

    return number === 1

}


//iterate this over n , and now the list of ugly number can be returned
function arrayNUgllyNumber(n){
    let counter = 0 , currentNumber =1 , uglyNumbers =[]

    while (counter !=n){
        if(isUgly(currentNumber)){
            counter ++
            uglyNumbers.push(currentNumber)
        }
        currentNumber++
    }
    return uglyNumbers
}