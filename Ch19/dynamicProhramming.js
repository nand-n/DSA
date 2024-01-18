//Fibonacci sequence 
function getNthFibo(n){
    if(n<=1){
        return n
    }else{
        return getNthFibo(n-1) + getNthFibo(n-2)
    }

}


{/** 
    Recursive implementation of this algorithm is O(2^n)
    This is an nexponential runtime , which is impractical for 
    real-worled applications. 

    using a hash table once the fibonacci number has been completed 
    , it can be stored like the following implementation 
*/}

let cache = {}
function fiboBest(n){
    if(n<=1) return n
    if(cache[n]) return cache[n]
    return (cache[n] = fiboBest(n-1) + fiboBest(n-2))
}
