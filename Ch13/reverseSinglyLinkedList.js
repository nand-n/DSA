{/**
    Problem : Reverse a singly linked list 
    Solution : To reverse simply iterate through each node and set the next property on the current node to the previous node. 
*/}

function reverseSinglyLinkedList(ssl){
    let node = ssl.head
    let prev = null
    while(node){
        let temp = node.next
        node.next = prev
        prev = node
        if(!temp){
            break
        }
        node = temp
    }
    return node
}