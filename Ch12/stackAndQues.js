{/**
    Stack and queues 
    Stack is a data structure in which the last inserted element can be removed 
    and accessed.

    example think about Stacking plates on a table . to get to the bottom on e you must remove all the the other onece on the top . 
    LIFO last in firt out 

*/}

function Stack(arr){
    this.arr =[]
    if(arr) this.arr = arr
}

Stack.prototype.getBuffer = function (){
    return this.arr.slice()
}
Stack.prototype.isEmpty = function (){
    return this.arr.length == 0
}

let Stack1 = new Stack()
console.log(Stack1);

//peek the last element in the Stack 

Stack.prototype.peek = function(){
    return this.arr[this.arr.length -1]
}

//insertion : can be done via the push function natively
Stack.prototype.push = function(value){
    this.arr.push(value)
}

//deletion 

Stack.prototype.pop = function (){
    return this.arr.pop()
}

//Access 
function stackAccessNthTopNode(stack , n){
    let bufferArray = stack.getBuffer()
    if(n<=0) throw 'error'
    let bufferStack = new Stack(bufferArray)

    while(--n!==0){
        bufferStack.pop()
    }
    return bufferStack.pop()
}

let stack2 = new Stack()

stack2.push(1)

//Searching a stack data structure 
function stackSrearch(stack , element){
    let bufferArray = stack.getBuffer()
    let bufferStack = new Stack(bufferArray)
    while(!bufferStack.isEmpty()){
        if(bufferStack.pop()==element){
            return ture
        }
    }
    return flase
}