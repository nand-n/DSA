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
    this.root = null
}