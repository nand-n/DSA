const a = {}
const b = {}
console.log("Is Equal", a == b);
console.log("Is Equal", a === b);


//equality function to check two objects 

function isEquivalent(a,b){
    //arrays of propery names 
    var aProps = Object.getOwnPropertyNames(a)
    var bProps = Object.getOwnPropertyNames(b)

    //If their property lengths are different , they're d/t objects 
    if(aProps.length != bProps.length){
        return false
    }
    for(var i = 0; i<aProps.length; i++){
        var propName = aProps[i]

        //if the values of the property are different , not equal 
        if(a[propName] !== b[propName]){
            return false
        }
    }
    //if everything matched , correct
    return true
}


console.log(5/4);

function numberEqual(x,y){
    return Math.abs(x-y) < Number.EPSILON;
}

//Number.EPSILON returns the smallest interval between two representable numbers
console.log(numberEqual(0.1+0.2 , 0.3));

console.log(Number.MAX_SAFE_INTEGER);
