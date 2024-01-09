{/**
    Stack and queues 
    Stack is a data structure in which the last inserted element can be removed 
    and accessed.

    example think about stacking plates on a table . to get to the bottom on e you must remove all the the other onece on the top . 
    LIFO last in firt out 

*/}

function stack(arr){
    this.arr =[]
    if(arr) this.arr = arr
}

stack.prototype.getBuffer = function (){
    return this.arr.slice()
}
stack.prototype.isEmpty = function (){
    return this.arr.length == 0
}

let stack1 = new stack()
console.log(stack1);