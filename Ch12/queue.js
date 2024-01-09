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
