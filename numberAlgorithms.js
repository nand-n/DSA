//Primality test 
//Primality test can be done by iterating from 2 to n , checking whether modulus division (remainder) is equal to zero 
function isPrime(n){
    if(n<=1){
        return false
    }
    //check from 2 to n-1
    for(i=2; i<n;i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

// Time complexity = O(n)
//because the algorithms checks all the numbers from 0 to n.

//better algorithm for isPrime 
//first any multiple of 2s can be ignored
{/**
it is dificult to notice but all primes are of the form 6k+-1 with the exeption of 2 and 3 where k is some integer.
*/}
function betterIsPrime(n){
    if(n<=1) return false
    if(n<=3) return true

    //this checked so that we can skip 
    //middle five numbers in below loop 
    if(n&2 == 0 || n%3 == 0) return false

    for(i=5; i*i<=n; i=i+6){
        if(n%i == 0|| n%(i+2) == 0){
            return false
        }
    } 
    return true
}

//Prime Factorization 
function primeFactors (n){
    
}