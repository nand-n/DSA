function LFUNode(key , value){
    this.prev = null 
    this.next = null 
    this.key = key
    this.data = value
    this.freqCount = 1
}

function LFUDoublyLinkedList(){
    this.head = new LFUNode('buffer head' , null)
    this.tail = new LFUNode('buffer tail' , null)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0

}

function LFUCache(capacity){
    this.key = {}//stores LFUNode
    this.freq ={} // stores LFUDoublyLinkedList
    this.capacity= capacity
    this.minFreq=0
    this.size = 0
}

{/** 
    Why linked list  is basic and important to know?
    Linked list is just a data structure that have every element 
    points the next or the previos element 
    
    What caching is and why we need caching
    caching is a mechanism of storing data in memory 
    there are two main types of caching algorithm 
    LFU and L

*/}