function DLLNode(key , data){
    this.key = key 
    this.data = data
    this.next = null 
    this.prev = null
}
//LRU cache can be initialized by passing the capacity parameter (capacity : defines how many nodes are allowed to be in the cache)
function LRUCache(capacity){
    this.keys = {}
    this.capacity = capacity
    this.head = new DLLNode('' , null)
    this.tail = new DLLNode('' , null)
    this.head.next = this.tail
    this.tail.prev = this.head
}

//LRU cache uses a doubly linked list , two function s removing a node and adding to the tail will be defined 
LRUCache.prototype.removeNode = function(node){
    let prev = node.prev , next = node.next
    prev.next = next 
    next.prev = prev 
}
LRUCache.prototype.addNode = function(node){
    let realTail = this.tail.prev;
     realTail.next = this.tail
     this.tail.prev = node 
     node.prev = realTail
     node.next = this.tail
}

//add and set 
LRUCache.prototype.get = function(key){
    let node = this.keys[key]
    if(node == undefined){
        return null
    }else{
        this.removeNode(node)
        this.addNode(node)
        return node.data
    }
}

LRUCache.prototype.set = function(key , value){
    let node = this.keys[key]
    if(node){
        this.removeNode(node)
    }
    let newNode = new DLLNode(key , value)
    this.addNode(newNode)
    this.keys[key] = newNode

    this.addNode(newNode)
    this.keys[key] = newNode

    //evict a node 
    if(Object.keys(this.keys).length > this.capacity){
        let realHead = this.head.next
        this.removeNode(realHead)
        delete this.keys[realHead.key]
    }
}