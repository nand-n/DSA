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

