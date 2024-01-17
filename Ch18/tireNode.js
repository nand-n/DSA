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


var trie1 = new Tire();
trie1.insert("sammie");
trie1.insert("simran");
console.log(trie1);
// trie1.search("simran"); // true