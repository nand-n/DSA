// Median is an even number of set is the average of the two  middle numbers if the array is sorted , this is simple
// [1,2,3,4]  has the median of (2+3)/2 = 2.5

function medianOfArray(arr){
    let length = arr.length
    //odd 
    if(length % 2 ==1){
        return arr[Math.floor(length/2)]
    }else{
        //even
        return (arr[length/2] + arr[length/2 -1])/2
    }

}

// console.log(medianOfArray([1,2,3,4]));

{/**
    arr1=[1,2,3] and arr2=[4,5,6]
    here the median of array is 2 and the median of array2 is 5.
    so the median must be present with in [2,3] and [4,5]. since 
    there are only four elements left , the median can be computed 
    as follow

    max(arr1[0] , arr2[0]) + min(arr1[1] , arr2[1])/2
*/}


function medianOfTwoSortedArray(arr1,arr2 , pos){
    if(pos<=0){
        return -1
    }
    if(pos == 1){
        return (arr1[0] + arr2[0])/2
    }
    if(pos ==2){
        return (Math.max(arr1[0] , arr2[0])+Math.min(arr1[1] , Math.min(arr2[1]))) / 2
    }
    let median1 = medianOfArray(arr1),
        median2 = medianOfArray(arr2)
    if(median1 == median2){
        return median1
    }
    let evenOffSet = pos%2 == 0?1:0,
        offSetMinus =Math.floor(pos /2) - evenOffSet ,
        offSetPlus = Math.floor(pos /2) + evenOffSet

    if(median1 < median2){
        return medianOfTwoSortedArray(arr1.slice(offSetMinus) , arr2.slice(offSetMinus
            ), offSetPlus)
    }else{
        return medianOfTwoSortedArray(arr2.slice(offSetMinus) , arr1.slice(offSetMinus) , offSetPlus)
    }
}

console.log(medianOfTwoSortedArray([1 , 2 , 3 ], [4 , 5 , 6 ], 3 ));