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
    
*/}