{/***
    Problem : Give an integer 'n' , find the factorial of that integer

    In Mathematics , the factorial of a non-negative integer 'n' , denoted n! , is the prodcut of all positive integers less than or equal to
    n

    factorial of zero is 1

    factorial(4) = 4*3*2*1 =24
*/}

const factorial = (n)=>{

    if(n==0){
        return 1
    }
    return n* factorial(n-1)

}

console.log(factorial(3));