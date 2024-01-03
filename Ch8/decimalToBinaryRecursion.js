{/**
    Problem : Convert Decimal (base 10) to binary number 

    To do this keep dividing thenumber by 2 and each time calculate 
        the modulus (remainder) and division
    Base case : the base case for this problem is when the n is less than 2 when it is less than 2 i can be only 0 or 1
*/}

function decimalToBinary(n){
    let binaryString
    
    function base10ToStringHelper(n){
        if(n<2){
            binaryString +=n
            return
        }else{
            base10ToStringHelper(Math.floor(n/2))
            base10ToStringHelper(n%2)
        }
    }
    base10ToStringHelper(n)
    return binaryString
}

console.log(binaryString(232));