function DoublyLinkedListNode(data){
    this.data = data 
    this.next = null
    this.prev = null
}

function DoublyLinkedList(){
    this.head = null
    this.tail = null
    this.size = 0
}

DoublyLinkedList.prototype.isEmpty = function(){
    return this.size == 0
}


DoublyLinkedList.prototype.addATFront = function(value){
    if(this.head == null){
        this.head = new DoublyLinkedListNode(value)
        this.tail = this.head
    }else{
        let temp = new DoublyLinkedListNode(value)
        temp.next = this.head
        this.head.prev = temp
        this.head = temp
    }
    this.size++
}

let dll1 = new DoublyLinkedList();
dll1.insertAtHead(10); // ddl1's structure: tail: 10  head: 10
dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
dll1.insertAtHead(20); // ddl1's structure: tail: 10  head: 20