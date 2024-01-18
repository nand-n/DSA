{/**
    This is a simple implementation , An arbirary prime number 
    of 101 was set for this example.Any high prime number should 
    work well in this case. 
    How ever , be aware that if the x is too high , it cold cause 
    integer overflow becase x^n-1 grows quickly .
    The endLength argument indicats to what string index the hash 
    should be calculated.It should be defaulted to the length of str
    if the argument is not passed .
*/}

function  RabinKarpSearch(){
    this.prime = 101
}
RabinKarpSearch.prototype.rabinKarpFingerprintHash = function(str, endLength){
    if(endLength == null) endLength = str.length
    let hashInt =0
    for(let i = 0; i<endLength; i++){
        hashInt+=str.charCodeAt(i) *Math.pow(this.prime , i)
    }
    return hashInt
}

var rks = new RabinKarpSearch();
rks.rabinkarpFingerprintHash("sammie"); // 1072559917336
rks.rabinkarpFingerprintHash("zammie"); // 1072559917343

//
RabinKarpSearch.prototype.recalculateHash = function(str , oldIndex , newIndex , oldHash , patternLength ){
    if(patternLength  == null) patternLength = str.length
    let newHash = oldHash - str.charAtCode(oldIndex)

    newHash =Math.floor(newHash /this.prime)

    newHash+= str.charCodeAt(newIndex) * Math.pow(this.prime , patternLength -1)
    return newHash
}

var oldHash = rks.rabinkarpFingerprintHash("sa"); // 9912
rks.recalculateHash("same", 0, 2, oldHash, "sa".length); //  11106

RabinKarpSearch.prototype.strEquals = function(str1 , startIndex1 , endIndex1 , str2 , startIndex2 , endIndex2){
    if(endIndex1 -startIndex1 != endIndex2 -startIndex2){
        return false
    }
    while(startIndex1 <= endIndex1 && startIndex2 <= endIndex2){
        if(str1[startIndex1] != str2[startIndex2]){
            return false
        }
        startIndex1++
        startIndex2++
    }
    return true
}

RabinKarpSearch.prototype.rabinkarpSearch = function(str , pattern){
    let T = str.length , W = pattern.length , 
    patternHash = this.rabinKarpFingerprintHash(pattern,W),
    textHash = this.rabinKarpFingerprintHash(str , W);
    for(let i = 1; i<= T - W + 1; i++){
        if(patternHash == textHash && this.strEquals(str , i -1 , i+W -2 , pattern , 0 , W-1)){
            return i-1
        } 
        if(i<T-W +1){
            textHash = this.recalculateHash(str, i  -1 , i+W-1 , textHash , W)
        }
    }
    return -1
}

// var rks = new RabinKarpSearch();
rks.rabinkarpSearch("SammieBae", "as"); // -1
rks.rabinkarpSearch("SammieBae", "Bae"); // 6
rks.rabinkarpSearch("SammieBae", "Sam"); // 0