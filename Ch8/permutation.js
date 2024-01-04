{/**
    Print all Permutation of an array
    The premise of the problem is to swap elements of array in every posible position

    Base case : beginIndex is equal to endIndex
*/}
function swap(strArr , index1 , index2){
    let temp = strArr[index1]
    strArr[index1] = strArr[index2]
    strArr[index2] = temp
}

function permute(strArr , begin , end){
    if(begin == end){
        console.log(strArr);
    }else{
        for(let i = begin; i<end+1; i++){
            swap(strArr, begin , i)
            permute(strArr , begin+1, end)
            swap(strArr , begin , i)
        }
    }
}

function permuteArray(arr){
    permute(arr , 0 , arr.length -1)
}


permuteArray(["A" , "C" , "D"])