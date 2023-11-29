{/**
    Problem : Give a number 'n' , find the first 'n' elements of the Fibonacci sequence in Mathematics , The Gibonacci sequence is a sequence 
    in which  each number is the sum of the two  preceding once 
 */}
const fiboncci=(n)=>{
    const fib = [0,1]

    for(i=2; i<n; i++){
        fib[i]= fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fiboncci(2));
console.log(fiboncci(4));
console.log(fiboncci(6));
console.log(fiboncci(12));