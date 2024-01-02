//This is implementationof calculating d 

function modInverse (e , phi){
    var m0=phi ,t , q
    var x0 = 0 , x1 = 1
    console.log("*******");

    if(phi ==1) return 0

    while (e>1){
        console.log("*******1");

        //q is quotient
        q = Math.floor(e/phi)
        t= phi    
        console.log("*******2");


        //phi is remainer now , process same as 
        //Euclid's algo
        phi = e % phi, e = t;
        t = x0
        x0 = x1 -q * x0
        x1 = t

        console.log("*******3");
    }
    //make it x1 positive 
    if(x1 < 0){
        x1+= m0
        console.log("*******4");
    }
    console.log("*******5");
    return x1

}


// modInverse(7,40)
// console.log(modInverse(7,40)); // 23


// Key pair of a public key and a private key alos needed to be generated 

function RSAKeyPair(p,q){
    //need to check that htey are prime 
    if(!isPrime(p) && isPrime(q)){
        return
    }
    //Check they are not the same
    if(p== q){
        return 
    }

    var n = p*q,
            phi=(p-1)*(q-1),
            e = 3,
            d = modInverse(e , phi)

    //public key : [e,n] , private key : [d,n]
    return  {"Public Key :": [e,n] ,"Private key": d,n}
}


function isPrime(n){
    if(n<=1) return false
    if(n<=3) return true

    if (n%2 == 0 || n%3 == 0) return false;
    for ( const i=5; i*i<=n; i=i+6){
        if(n%i == 0 || n%(i+2)==0)
            return false
    }
    return true
}

console.log(RSAKeyPair(7,40));
