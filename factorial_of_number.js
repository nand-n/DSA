{/***
    Problem : Give an integer 'n' , find the factorial of that integer

    In Mathematics , the factorial of a non-negative integer 'n' , denoted n! , is the prodcut of all positive integers less than or equal to
    n

    factorial of zero is 1

    factorial(4) = 4*3*2*1 =24
*/}

const factorial = (n)=>{

    let fac = 1

    for(i=2; i<=n; i++){
        fac*=i
    }
    return fac
}

console.log(factorial(3));