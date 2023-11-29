function isPrime(n){
    if(n<2){
        return false
    }
    for(i=2; i<math.sqrt(n); i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

 //Big-o = O(sqrt(n)) --> linear Space complexity
 //
 //Integers larger than the square root do not need to be checked  beacause whenever 'n=a