function leanirseacrch(arr , target){
    console.log(arr);
    for(i=0; i < arr.length; i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1

}

console.log(leanirseacrch([-1,2,4,6] ,4));