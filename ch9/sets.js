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

//returning all unique values from separate array 
{/**with some of the same values , return one array that has all the 
    unique elements from both of the orginal arrays 

    Given two array 
*/}

function uniqueList(arr1, arr2){
    let mySet = new Set(arr1.concat(arr2))
    return Array.from(mySet)
}

console.log(uniqueList([1,1,2,2],[2,3,4,5]));

//check duplicated values in array using an array

function checkDuplicated(arr){
    let mySet = new Set(arr)
    return mySet.size < arr.length
}