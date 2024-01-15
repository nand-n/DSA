
{/**

*/}
function Heap(){
    this.items =[]
}

Heap.prototype.swap = function(index1 , index2){
    let temp = this.items[index1]
    this.items[index1]  = this.items[index2]
    this.items[2] = temp
}

Heap.prototype.parentIndex = function(index){
    return Math.floor((index -1) /2)
}

Heap.prototype.leftChildIndex = function(index){
    return index*2 +1
}
Heap.prototype.rightChildIndex = function(index){
    return index * 2 +2
}
Heap.prototype.parent = function(index){
    return this.items[this.parentIndex(index)]
}

Heap.prototype.leftChild = function(index){
    return this.items[this.leftChildIndex(index)]
} 
Heap.prototype.righChild = function(index){
    return this.items[this.rightChildIndex(index)]
}
Heap.prototype.peek = function(){
    return this.items[0]
}

Heap.prototype.size = function(){
    return this.items.length
}
function MinHeap(){
    this.items = []
}
MinHeap.prototype = Object.create(Heap.prototype) //insert helpers 
MinHeap.prototype.add = function(item){
    this.items[this.items.length] = item
    this.bubleUp()
}

MinHeap.prototype.poll = function (){
    let item = this.items[0]
    this.items[0] = this.items[this.items.length -1]
    this.items.pop()
    this.bubleDown()
    return item
}

MinHeap.prototype.bubleDown = function(){
    let index = 0
    while(this.leftChild(index) && (this.leftChild(index) <  this.items[index] || this.rightChild(index) < this.items[index] )){
        let smallerIndex = this.leftChild(index)
        if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]){
            smallerIndex = this.rightChildIndex(index)

        }
        this.swap(smallerIndex , index)
        index = smallerIndex
    }
}
MinHeap.prototype.bubleUp = function(){
    let index = 0;
    while(this.leftChild(index) && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])){
        let smallerIndex = this.leftChildIndex(index)
        if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]){
            smallerIndex = this.rightChildIndex(index)
        }
        this.swap(smallerIndex , index)
        index = smallerIndex
    }
}
MinHeap.prototype.bubleUp = function(){
    let index = this.items.length -1
    while(this.parent(index) && this.parent(index) > this.items[index]){
        this.swap(this.parentIndex(index) , index)
        index = this.parentIndex(index)
    }
}

let mh1 = new MinHeap()
mh1.add(1)
mh1.add(12)
mh1.add(13)
mh1.add(14)
mh1.add(15)

console.log(mh1.poll()); // 1
console.log(mh1.poll()); // 5
console.log(mh1.poll()); // 8
console.log(mh1.poll()); // 10
console.log(mh1.poll()); // 100

