function AVLTree(value){
    this.left = null
    this.right = null
    this.value = value
    this.depth = 1
}

//The height of the avl tree is based on the height of the children and can be calculated using the following code block 
AVLTree.prototype.setDepthBasedOnChildren = function (){
    if(this.node ==null){
        this.depth = 0
    }else{
        this.depth =1
    }
    if(this.left !=null){
        this.depth = this.left.depth +1
    }
    if(this.right != null && this.depth <= this.right.depth){
        this.depth = this.right.depth + 1
    }
}

//Totate left 
{/**
    To perform a left rotation , 
        First get the left child and store it. This is the 'orginal left'child
        The orginal left child is to be the parent of the node now .
        Set the node's left child to be the orginal left child.
        Finally set the right child of the orginal left child  to be the node.
*/}

AVLTree.prototype.rotateLL = function(){
    let valueBefore=  this.value
    let rightBefore=this.right 
    this.value=this.left.value

    this.right = this.left
    this.left = this.left.left
    this.right.left = this.right.right
    this.right.right = rightBefore
    this.right.value = valueBefore 

    this.right.getDepthFromChild()
    this.getDepthFromChild()
}

