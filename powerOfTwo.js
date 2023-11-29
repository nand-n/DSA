{/**
    Problem : Give a positve integer 'n', determine if the number is a power of 2 or not 
    An integer is a power fo two if there exists an integer 'x' such thatn 'n' === 2^x
    isPowerOfTwo(1)=true
*/}

function isPowerOfTwo(n){
    if(n<1){
        return false
    }
    while (n>1){
        if(n %2 !== 0){
            return false
        }
        n=n/2
    }
    return  true
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false

// Big-o  = O(logn)

//Time complexity constant O(1) ==> more  improved 
function isPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) === 0;
}