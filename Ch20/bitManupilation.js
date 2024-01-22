//Number Operation
//Adition
function BitWiseAdd(a, b){
    while(b!=0){
        let carry = (a & b)
        a =a^b
        b =carry<<1
    }
    return a
}


console.log(BitWiseAdd(4,5)); // 9