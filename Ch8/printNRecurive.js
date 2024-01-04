{/**
    Problem : a function that prints from n to 1 using recursion 

*/}

function printNRecursive(n){
    console.log(n);
    if(n>1){
        printNRecursive(n-1)
    }
}

printNRecursive(10)