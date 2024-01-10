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


//Deletion by value 
SinglyLinkedList.prototype.remove = function(value){
    let currentHead = this.head
    if(currentHead.data ==value){
        //just shift the head over . head is now this new 
        this.head = currentHead.next
        this.size--;
    }else{
        let prev = currentHead;
        while(currentHead.next){
            if(currentHead.data == value){
                //remove by skipping
                prev.next = currentHead.next
                prev = currentHead
                currentHead= currentHead.next
                break //break out of the loop 
            }
            prev = currentHead
            currentHead = currentHead.next
        }
        //if wasn't in the middle or head must be tail 
        if(currentHead.data == value){
            prev.next = null
        }
        this.size--
    }
}

sll1.insert(1)
sll1.insert(12)
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
sll1.remove(12); // linked list is now: 20 -> 1 -> null
sll1.remove(20); // linked list is now: 1 -> null

//Search 
SinglyLinkedList.prototype.find = function (value){
    let currentHead = this.head;
    while(currentHead.next){
        if(currentHead.data ==value){
            return true
        }
        currentHead = currentHead.next
    }
    return false
}