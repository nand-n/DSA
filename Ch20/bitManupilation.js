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
{/**
Here are two examples in detail:
bitwiseAdd(4, 5);
4:             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0
5:             0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1
sum = 4 ^ 5 =  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
= 1 (base 10)
carry = (a & b) << 1
a & b =        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0
(a & b) << 1 = 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0
= 8 (base 10)
bitwiseAdd(1, 8);
1:            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
8:            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0
sum = 1 ^ 8 = 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1
= 9 (base 10)
carry =   (a & b) << 1
a & b =   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
-> return 9 (a)
*/}


//Bitwise Negate
{/**
    Creatie Negate funciton using the NOT operator. In Binary , substractin a 
    negative binary number from  a positive on eis obtained by inverting all the
    the bits and adding 1. 
*/}
function BitwiseNegate(a){
    return BitWiseAdd(~a,1)
}
//Subtraction 
function BitWiseSubtract(a,b){
    return BitWiseAdd(a,BitwiseNegate(b))
}

console.log(BitWiseSubtract(4,5)); // -1


{/**
    Multiplying numbers in base 2 follows the same logic as multiplying numbers in base
    2; Multiply the numbers , carry anything  over 10 to the next digit and then multiply 
    the next digit with the shifted base (in the case of decimals , multiply bu 10 each 
    time yoiu shift the digit  
    )
*/}
//Bitwise Multiply 
function BitWiseMultiply(a,b){
    let m=1, c =0;
    if(a<0){
        a =BitwiseNegate(a)
        b=BitwiseNegate(b)
    }
    while(a>=m && b){
        if(a & m ){
            c = BitWiseAdd(b,c)
        }
        b = b<<1
        m=m<<1
    }
    return c
}

console.log("Multiplication :",BitWiseMultiply(4,5));

//Division 
{/** 
    DIvision can be thought of as the number of times you can  subtract b form a , given a/b
    example 4/2  4-2-2 =0 .
*/}

function BitwiseDividePositive (a,b){
    let c =0;
    if(b!=0){
        while(a>=0){
           
                a = BitWiseSubtract(a,b)
                c++
        }
    }
    return c 
}

//THis is relativly simple it is only for positive numbers 

function BitwiseDivide(a,b){
    let c = 0, isNegative =0;

    if(a<0){
        a = BitwiseNegate(a) //convert to positive
        isNegative = !isNegative
    }
    if(b<0){
        b = BitwiseNegate(b) //converts to positive
        isNegative= !isNegative
    }
    if(b!=0){
        while(a>=b){
            a = BitWiseSubtract(a , b)
            c++
        }
    }
    if(isNegative){
        c = BitwiseNegate(c)
    }
    return c
}
console.log(BitwiseDivide(-10,2));//-5
console.log(BitwiseDivide(10, 2)); // 5
console.log(BitwiseDivide(-200, 4)); // -50

{/**
    & AND   1 when both bits are 1
|   OR      1 when either bit is 1
∼   NOT     Inverts all the bits
^   XOR        1 when only one of the bits is 1
<<  Left shift  Shifts to the left, and any excess bits are shifted off
>>Right shiftShifts to the right, and any excess bits are shifted off
>>>Zero-fill right shiftShifts to the right, and any excess bits are shifted off and the
**/}