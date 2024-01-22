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