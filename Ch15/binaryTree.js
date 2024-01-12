//a class that creates a tree node
function TreeNode (value){
    this.value = value
    this.childern =[]
}
//Binary tree
function BinaryTreeNode(value){
    this.value = value
    this.left = null
    this.right = null
}
//binary tree alwaays has a  root node(the node at the top) which initialized to null before any element is inserted
function BinaryTree(){
    this._root = null
}

BinaryTree.prototype.traverePreorder = function(){
    traverePreorderHelper(this._root)
    function traverePreorderHelper(node){
        if(!node){
            reutrn
        }
        console.log(node.value);
        traverePreorderHelper(node.left)
        traverePreorderHelper(node.right)
    }
}

BinaryTree.prototype.traversalPreorderIterative = function(){
    let nodeStack = []
    nodeStack.push(this._root)
    //pop all items one by one 
        // print it 
        //push its right child 
        //push its left child 
    //right child is pushed first so that left is processed first 
    while  (nodeStack.length){
        //pop the top item from the stack and print 
        let node = nodeStack.pop()
        console.log(node.value);
        //push right and left children of the popped node to stack 
        if(node.right){
            nodeStack.push(node.right)
        }
        if(node.left){
            nodeStack.push(node.left)
        }
    }
}
//In-Order-Traversal 
BinaryTree.prototype.traversInOrder = function(){
    traverseInOrderHelper(this._root)
    function traverseInOrderHelper(node){
        if(!node){
            return
        }
        traverseInOrderHelper(node.left)
        console.log(node.value);
        traverseInOrderHelper(node.right)
    }
}
BinaryTree.prototype.traverseInOrderIterative = function(){
    let current  = this._root , s =[] , done = false ;
    while(!done){
        //Reach the left most node of the current node
        if(current !== null){
            //place pointers to a tree node on the stack 
            //before traversing the node's left subtree
            s.push(current)
            current = current.left
        }else{
            if(s.length){
                current = s.pop()

                console.log(current.value);
                current = current.right
            }else{
                done = true
            }
        }
    }
}

//PostOrderTraversal
BinaryTree.prototype.postOrderTraversal =function(){
    traversePostOrderHelper(this._root)
    function traversePostOrderHelper(node){
        if(node.left){
            traversePostOrderHelper(node.left)
        }
        if(node.right){
            traversePostOrderHelper(node.right)
        }
        console.log(node.value);
    }
}
//postOrderTaversal using iterative 
BinaryTree.prototype.traversePostOrderIterative = function(){
    //create two stack 
    let s1 = [] , s2 = [];
    //push root to first stack 
    s1.push(this._root)
    //run while first stack is not empty 
    while(s1.length){
        //pop an item from s1 and append it to s2
        let node = s1.pop()
        s2.push(node)
        //push left and right children of removed item to s1
        if(node.left){
            s1.push(node.left)
        }
        if(node.right){
            s1.push(node.right)
        }
    }
    while(s2.length){
        let node = s2.pop()
        console.log(node.value);
    }
}
BinaryTree.prototype.traverseLevelOrder = function(){
    //Breath first search
    let root = this._root , queue =[]
    if(!root) return 
    queue.push(root)
    while(queue.length){
        let temp = queue.shift()
        console.log(temp.value);
        if(temp.left){
            queue.push(temp.left)
        }
        if(temp.right){
            queue.push(temp.right)
        }
    }
}
