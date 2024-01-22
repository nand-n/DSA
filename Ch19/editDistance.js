{/**
    THe Edit distance probelm considers the ff

    Given : a string(str1) of length m and another string(str2) of
            length n ,what is the minimum number of edits to convert 
            str1 into str2?

    Optimal Substrucutre :
        If each character is processed one by from each str1 and str2 , 
        the ff is possible 

        1. the characters are the same :
            do nothing 
        2. the characters are different :
            consider the case recursively :

            Insert : for m and n-1
            Remove : for m-1 and n 
            Replace : for m-1 and n-1
*/}

//Naive approach 
function editDistanceRecursive(str1, str2 , length1 , length2){
    //str1 is empty . only option is insert all of str2 
    if(length1 ==0){
        return length2
    }
    //str2 is empty . only option is insert all of str1
    if(length2 ==0){
        return length1
    }

    //last chars are same 
    //ignore last chars and count remaining 
    if(str1[length1-1] == str2[length2-1]){
        return editDistanceRecursive(str1,str2, length1-1 , length2-1)
    }
    //last char is not the same 
    //there are three operations : insert , remove , and replace 
    return 1+ Math.min(
        //insert 
        editDistanceRecursive(str1, str2, length1, length2-1),
        //remove 
        editDistanceRecursive(str1, str2, length1-1 , length2),
        //replace 
        editDistanceRecursive(str1,str2, length1-1 , length2-1) 
    )
}
function editDistanceRecursiveWrapper (str1,str2){
    return editDistanceRecursive(str1,str2, str1.length, str2.length)
}

console.log(editDistanceRecursiveWrapper('sammie','bae'));

//BIGO : O(3^m)

//DP APPROACH
{/**
    DP approach : will construct a matrix withthe dimensions str1 and str2.
    The base case is when i or j is equal or 0.In other case it is 1 + min(insert , remve , replace)
    just like the recursive approach 
*/}

function editDistanceDP(str1, str2, length1, length2){
    //create the matrix 
    let dpMatrix = []
    for(let i =0; i<length1+1 ; i++){
        dpMatrix[i] = []
        for(let j =0; j<length2+1; j++){
            dpMatrix[i][j] = undefined
        }
    }
    for(let i=0; i<length1+1; i++){
        for(let j=0; j<length2+1; j++){
            //if first str1 is empty 
            //have to insert all the chars of str2
            if(i==0){
                dpMatrix[i][j] = j
            }else if(j==0){
                dpMatrix[i][j] = i
            }else if(str1[i-1] == str2[j-1]){
                //if the same , no additional cost 
                dpMatrix[i][j] = dpMatrix[i-1][j-1]
            }else{
                let insertCost = dpMatrix[i][j-1],
                removeCost = dpMatrix[i-1][j],
                replaceCost= dpMatrix[i-1][j-1];
                dpMatrix[i][j] = 1 + Math.min(insertCost , removeCost, replaceCost)  
            }
        }
    }
    return dpMatrix[length1][length2]
}

function editDistanceDPWrapper(str1 , str2){
    return editDistanceDP(str1 , str2 , str1.length , str2.length)
}
console.log("DP:" ,editDistanceDPWrapper('sammie','bae'));