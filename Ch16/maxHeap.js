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

function MaxHeap(){
    this.items =[]
}

MaxHeap.prototype = Object.create(Heap.prototype)

MaxHeap.prototype.poll = function(){
    let item = this.items[0]
    this.items[0] = this.items[this.items.length -1]
    this.items.pop()
    this.bubleDown()
    return item
}

MaxHeap.prototype.bubleDown = function (){
    let index = 0
    while(this.leftChild(index) && (this.leftChild(index) > this.items[index] || this.righChild(index) > this.items[index])){
        let biggerIndex = this.leftChildIndex(index)
        if(this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]){
            biggerIndex = this.rightChildIndex(index)
        }
        this.swap(biggerIndex , index )
        index = biggerIndex
    }
}

MaxHeap.prototype.bubleUp = function (){
    let index = this.items.length -1
    while(this.parent(index) && this.parent(index) < this.items[index]){
        this.swap(this.parentIndex(index))
    }
}
MaxHeap.prototype.add = function(item){
    //filnish the add function 
}

var mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(100);
mh2.add(8);

console.log(mh2.poll()); // 100
console.log(mh2.poll()); // 10
console.log(mh2.poll()); // 8
console.log(mh2.poll()); // 5
console.log(mh2.poll()); // 1