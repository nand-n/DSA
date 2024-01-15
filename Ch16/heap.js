{/**
    An array will be used to store all the values using index structure
    described earlier. The following heap class implements helper 
    function that retrives the parent node , the left child , and the right child 

    The function returns the maximum value for a max-heap and the  minimum value for min-heap

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
    this.items=[]
}
MinHeap.prototype = Object.create(Heap.prototype)
//Insert helpers form heap by copying prototype 
MinHeap.prototype .bubleDown = function (){
    let index = 0
    while(this.leftChild(index) && this.leftChild(index) < this.items[index]){
        let smallerIndex = this.leftChildIndex(index)
        if(this.righChild(index) && this.righChild(index) < this.items[smallerIndex]){
            //if right is samller , right swaps 
            smallerIndex = this.rightChildIndex(index)
        }
        this.swap(smallerIndex , index)
        index = smallerIndex
    }  
}

//Buble up 
MinHeap.prototype.bubleUp = function(){
    let index = this.items.length -1
    while(this.parent(index) && this.parent(index) > this.items[index]){
        this.swap(this.parentIndex(index) , index)
        index = this.parentIndex()
    }
}