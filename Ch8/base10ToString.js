function base10ToString(n){
    let binaryString =''
    function base10ToStringHelper(n){
        if(n<2){
            binaryString+=n
        }else{
            base10ToStringHelper(Math.floor(n/2))
            base10ToStringHelper(n%2)
        }
    }
    base10ToStringHelper(n)
    return binaryString
}