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