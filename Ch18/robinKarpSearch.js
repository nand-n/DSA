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