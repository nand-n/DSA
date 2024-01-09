function SinglyLinkedListNode(data){
    this.data = data
    this.next = null
}

//the following is for the singly linked list example 
function SinglyLinkedList(){
    this.head = null
    this.size = 0
}

SinglyLinkedList.prototype.isEmpty = function(){
    return this.size = 0
}

{/**
    Insertion :
        if the head of the linked list is empty , the head is set to the new node. 
        Otherwise , the old heap is saved in temp  and the new head becomes the newly added node. 
        Finally the new head's next points to the temp (the old head)
*/}

SinglyLinkedList.prototype.insert = function(value){
    if(this.head == null){ //if first node
        this.head = new SinglyLinkedListNode(value)
    } else{
        let temp = this.head
        this.head = new SinglyLinkedListNode(value)
        this.head.next = temp
    }
    this.size++
}

let sll1 = new SinglyLinkedList()
sll1.insert(1) // linked list is now : 1 -> null
sll1.insert(2) // linked list is now : 2 -> 1 -> null
