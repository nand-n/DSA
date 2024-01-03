function getNthFibo(n){
    if(n<= 1)return n
    let sum =0, last =1, lastlast=0;
    for (let i =1; i<n;i++){
        sum = lastlast+last;
        lastlast = last
        last=sum
    }
    return sum
}

//using recurive funciton 
function getNthFiboRecursion(n){
    if(n<=1){
        return n
    }else{
        return getNthFiboRecursion(n-1) + getNthFiboRecursion(n-2)
    }
}
{/**
    Base case : 1 
    Divide and conquer : by definition fibonacci sequence is the sum of n-1 and n-2
*/}



