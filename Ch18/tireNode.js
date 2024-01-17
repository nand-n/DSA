{/**
    A tire is implemented using a nested object where each level has it's firect children 
    as key. A tire node can be formed by using an object to store the children.
    The tire has a root node that is instanciated in the constracor  of the Tire class 

*/}

function TireNode (){
    this.children ={}
    this.endOfWord =false
}

function Tire(){
    this.root = new TireNode()
}

{/**
    TO insert into the tire , the child tire node is created on the root if it does not exist 
    already
    For Each character in the word being inserted , it creates a child node if the 
    character does not exist
*/}

Tire.prototype.insert = function(word){
    let current = this.root
    for(let i = 0; i<word.length; i++){
        let ch = word.charAt(i)
        let node = current.children[ch]
        if(node  == null ){
            node  = new TireNode()
            current.children[ch] = node
        }
        current =node
    }
    current.endOfWord = true
}


{/**
    To search inside a tire , each characted of the word must be checked. 
    This is done by setting  a temporary variable of current on the root
    The currenct variable is updated as each characted in the word is checked 
*/}

Tire.prototype.search = function(word){
    let current = this.root
    for(let i = 0; i<word.length; i++){
        let ch = word.charAt(i)
        let node = current.children[ch]
        if(node == null){
            return false //node doesnt exist
        }
        current = node 
    }
    return current.endOfWord
}

{/**
    To delete an element from a tire , the algorighm should traverse the root node 
    until it reaches the last character of the word.
    Then for each node that odes not have any other children , the node should be deleted 
    
*/}

Tire.prototype.delete = function(word){
    this.deleteRecursively(this.root, word , 0)
}

Tire.prototype.deleteRecursively = function(current , word , index){
    if(index == word.length){
        //when end of word is reached only delete id current.end of word is true
        if(!current.endOfWord){
            return false
        }
        current.endOfWord= false
        //if current has no other mapping then return true 
        return Object.keys(current.children).length == 0
    }
    let ch = word.charAt(index) , node = current.children[ch]
    if(node == null){
        return false
    }
    let shouldDeleteCurrentNode = this.deleteRecursively(node , word , index +1)
    //if true  then delete the mapping of character and trienode reference form amp 
    if(shouldDeleteCurrentNode){
        delete current.children[ch]
        //return true of no mapping are left in the map
        return Object.keys(current.children).length == 0
    }
    return false
}
var trie1 = new Tire();
trie1.insert("sammie");
trie1.insert("simran");
trie1.insert("nana");
console.log(trie1.search("simran")); 
trie1.delete("simran");

console.log(trie1.search("simran")); // true
// console.log(trie1);
