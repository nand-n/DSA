const set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)

// console.log(set);

//Intersection

function intersectSet(setA , setB){
    let intersection = new Set()
    for(var elem of setB){
        if(setA.has(elem)){
            intersection.add(elem)
        }
    }
    return intersection
}

var setA = new Set([1, 2, 3, 4]),setB = new Set([2, 3]);
console.log("Intersections :",intersectSet(setA,setB));



//Superset : a set is a "superset " of another set if it contains all the elements of the other set
function isSuperSet(setA , subSet){
    for(let elem of subSet){
        if(!setA.has(elem)){
            return false
        }
    }
    return false
}

var setA = new Set([1, 2, 3, 4]),setB = new Set([2, 3]),setC = new Set([5]);

console.log("Is super set : ",isSuperSet(setA , setB));

//union : combines the elements form both sets 

function unionSet (setA ,setB){
    let union = new Set(setA)
    for(let elem of setB){
        union.add(elem)
    }
    return union
}

//difference 
function differenceSet(setA ,setB){
    let difference = new Set(setA)
    for(let elem of setB){
        difference.delete(elem)
    }
    return difference
}