{/**
    Question : Given three numbers x, y and p , calculate the
    eponentation
*/}
function modulearExponentation(base , exponent , modulus){
    return Math.pow(base , exponent) % modulus
} 

// but the above function can not handle large numbers
{/**
 example :
     Base : 6x10^66
     Exponent : 27
     Modlus : 497

     in this case the Base number is large number and can not be 
     stored in a 32-bit floating point 
     There is another approach using mathematical equation

     c% m = (a b) % m
     c % m = [(a& m) (b%m)] %m 

     pseudocode :
        1 Set value  - 1 , current exponent = 0 
        2. Increment curretn exponent  by 1
        3. Set value = (base value) mod modulus until current 
            exponent is reached exponent 
        example Base : 3 
                Exponent : 3 
                Modulus : 5
*/}
function modulearExponentationBetter(base , exponent , modulus){
    if(modulus == 1) return 0
    var value = 1
    for(i=0; i<exponent; i++){
        value = (value * base) % modulus
    }
    return value
}