function longestPrefix(str){
    //prefix array is created 
    let prefix   = new Array(str.length)
    let maxPrefix =0
    //start the prefix at 0
    prefix[0] =0
    for(let i =1; i<str.length;i++){
        //decrement the prefix value as long as there are mismatches 
        while(str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0){
            maxPrefix = prefix[maxPrefix -1]
        }
        //string match , can update it 
        if(str.charAt(maxPrefix) == str.charAt(i)){
            maxPrefix++
        }
        //set the prefix 
        prefix[i] = maxPrefix
    }
    return prefix
}

console.log(longestPrefix('ababaca')); // [0, 0, 1, 2, 3, 0, 1]