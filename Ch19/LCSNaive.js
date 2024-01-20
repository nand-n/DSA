{/**
    Naive Approch
    Letting  str1 be the first string of length m , str2 be the second string of length 
    n , and LCS be the function , the naive approach can first concider the following pseudocode

    if last character of both sequence match (i.e str1[m-1] == str2[n-1]) :
        result = 1 + LCS(X[0:m-2] , Y[0:n-2])
    if last characters of both sequences DO NOT match (i.e str1[m-1] != str2[n-1]) :
        result result = Math.max(LCS(X[0:m-1] , Y[0:n-1]) , LCS(X[0:m-2] , Y[0:n-2]))

    with this recurisve structure in mind , the following can be implemented
*/}

function LCSNaive(str1 , str2 , str1Length , str2Length){
    if(str1Length ==0 || str2Length ==0){
        return 0;
    }


    if(str1[str1Length-1] == str2[str2Length -1]){
        return 1+ LCSNaive(str1 , str2 , str1Length -1 , str2Length -1)
    }else{
        return Math.max(LCSNaive(str1 , str2, str1Length , str2Length -1) ,LCSNaive(str1 , str2, str1Length-1 , str2Length))
    }
}

function LCSNaiveWrapper(str1 , srt2){
    return LCSNaive(str1 , srt2 , str1.length ,srt2.length)
}

console.log(LCSNaiveWrapper('AGGTAB', 'GXTXAYB')); // 4

//DP approach 
{/**
    A recurive structure described can ve translated in to a table / cache 
    where the rows each represent a character in str1 and the columns each represent a
    character in str2.
    Each item in a matrix at a row , i , and column , j , represents LCS(str1[0:i] , str2[0:j])
    
*/}
function longestCommonSequenceLength(str1 , str2){
    let matrix = Array(str1.length +1).fill(Array(str2.length +1).fill(0)),
    rowLength = str1.length +1,
    colLength = str2.length +1,
    max = 0;

    for(let row = 1; row<rowLength; row++){
        for(let col = 1; col<colLength; col++){
            let str1Char = str1.charAt(row -1),
                str2Char = str2.charAt(col - 1);
                if(str1Char == str2Char){
                    matrix[row][col]  = matrix[row-1][col-1] +1;
                    max = Math.max(matrix[row][col] , max) 
                }
        }
    }
    return max;
}