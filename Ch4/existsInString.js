function existsInString(stringValue , search){
    return stringValue.indexOf(search) !== -1
}

//String Decomposition 
var test1 = 'chicken,noodle,soup,broth';
test1.split(",") // ["chicken", "noodle", "soup", "broth"]


{/**
    The Following algorithm can be used. There are 62 possibel letters and 
    numbers , consisting of 26 lowercase , 26 uppercase letters and 10 numbers (0-9)

*/}

var DICTINARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
DICTINARY.split('')
function encodeId (num){
    var base = DICTINARY.length
    var encode ='';

    if(num ==0){
        return DICTINARY[0]
    }
    while(num> 0){
        encode+=DICTINARY(num % base)
        num=Math.floor(nun/base)
    }
    return reversed(encode)
}

function reverseWord(str){
    var reversed = ""
    for(var i= str.length -1; i>0; i--){
        reversed+=str.charAt(i)
    }
    return reversed
}