{/**
The Factorial of a non-negative   integer 'n' , denoted  n! , is the product of all positive integers less than or equal ot 'n'
The Factorial of zero is 1 
foctorial of(4) = 4*3*2*1 = 24
factoril(5)=5*4*3*2*1 =120
*/}

function factoril(n){
    if(n==0){
        return 1
    }
    return n* factoril(n-1)
}

console.log(factoril(5))