function Queue(arr){
    this.arr =[]
    if(arr) this.arr = arr
}
Queue.prototype.getBuffer = function(){
    return this.arr.slice()
}

Queue.prototype.isEmpty = function (){
    return this.arr.length == 0
}

//peek 
Queue.prototype.peek = function(){
    return this.arr[o]
}

//Insersion
Queue.prototype.enqueue = function(val){
    return this.arr.push(val)
}

//Deletion
Queue.prototype.deque = function(){
    return this.arr.shift()
}

