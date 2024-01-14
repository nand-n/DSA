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

//rotate to right
{/**
    First get the left child and store it (the orginal left child)
    The orgial left child is to be the parent of the node now.
    Set the node's left child to be the orginal left child's left child 
    Finally , set the right child of the left ch9ild to be the node 
*/}

AVLTree.prototype.rotateRR = function(){
    //the right side is too long  => rotate from the right (_not_ rightwards)
    let valueBefore = this.value
    let leftBefore = this.left
    this.value = this.right.value

    this.left=this.right 
    this.right = this.left
    this.value = this.right.value

    this.left = this.right
    this.right = this.right.right
    this.left.right = this.left.left
    this.left.left =leftBefore
    this.left.value= valueBefore
}

//double rotation 
{/**
    Balancing the tree : 
        to check the balance if the avl tree , it is simple comparison o fthe left 
        right children's heights.
        If the heights are not balanced , rotations are needed.  
        when the left is bigger than the right , left rotation is done.
        When Right if bigger than left , right rotation is done.
*/}

AVLTree.prototype.balance = function(){
    let ldepth = this.left == null?0 : this.left.depth
    let rdepth = this.right == null ? 0 : this.right.depth

    if(ldepth > rdepth +1){
        //LR or LL rotation 
        let lldepth = this.left.left == null?0:this.left.left.depth
        let lrdepth = this.left.right == null ? 0 : this.left.right.depth

        if(lldepth<lrdepth){
            //LR rotatoin consists of a RR rotatoin of the left child 
            this.left.rotateRR()
            //plus a LL rotation of the node , which happens anyway
        }
        this.rotateLL()
    }else if(ldepth +1 < rdepth){
        //RR or RL rotation 
        let rrdepth = this.right.right == null ? 0 : this.right.right.depth
        let rldepth = this.right.left ==null?0:this.right.left.depth
        if(rldepth >rrdepth){
            //RR rotation consists of a LL rotation of the right child 
            this.right.rotateLL()
            //plus a RR rotation of this node , which happens anyway
        }
        this.rotateRR()
    }
}

//Insersion 
{/**
    Inserstion in AVL BST is the same as the the insersion in normal 
    BST exept that ,once inserted , the parent must balance is's children and set the right depth
*/}

AVLTree.prototype.insert = function (value){
    let childInsered = false
    if(value == this.value){
        return false //should be al unique
    }else if(value < this.value){
        if(this.left == null){
             this.left = new AVLTree(value)
        childInsered = true
    }else{
        childInsered= this.left.insert(value)
        if(childInsered ==true) this.balance()
    }
        } else if(value > this.value){
            if(this.right == null){
                this.right = new AVLTree(value)
                childInsered = true
            }else{
                childInsered = this.right.insert(value)
                if(childInsered == true) this.balance()
            }
        }
       if(childInsered == true) this.setDepthBasedOnChildren()
       return childInsered
}
