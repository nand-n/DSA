//Fixed sized data structure in which the size is defined at the start 
{/**
 Hash table is exelent for qucik storage and retricval of data based on
 key - kalue parirs. 
 In js Objects works on defining a key (propery) and its associated value
*/}

//hash table contains two main functions put() and get()
//hashing techniques 
{/**
    The most important part of hashing is the hash function 
    THe hashing function converts a specific key into an index for an array 
    that stores all of the data.
    THe three primary requirments for good hash function are 
        1, Deterministic : Equal keys produce equal hash values 
        2, Efficency : it should be O(1) in time complexity 
        3, Uniform distribution L it makes the most use of the array 

*/} 

function hashTable(size){
    this.size= size;
    this.keys = this.initArray(size)
    this.values = this.initArray(size)
    this.limit = 0;
}
hashTable.prototype.put = function(key , value){
    if(this.keys.limit >= this.size) throw 'hash table is full'
    let hashIndex = this.hash(key)

    //leanrear probing 
    while (this.keys[hashIndex] != null){
        hashIndex++
        hashIndex = hashIndex % this.size
    }

    this.keys[hashIndex] = key
    this.values[hashIndex] = value
    this.limit++
}
hashTable.prototype.hash = function (key){
    //check if int 
    if(!Number.isInteger(key)) throw 'must  be integer'
    return key % this.size
}

hashTable.prototype.initArray = function(size){
    let array =[]
    for(let i = 0; i<size; i++){
        array.push(null)
    }
    return array
}

let exampleTable  = new hashTable(13)
console.log(exampleTable.put(7 , 'hi'));

//using quadratic probing 
hashTable.prototype.put = function (key , value){
    if(this.limit >= this.size) throw 'hash table is full'
    let hashedIndex = this.hash(key) , squareIndex = 1;

    //quadratic probing 
    while(this.keys[hashedIndex] !=null){
        hashTable+=Math.pow(squareIndex , 2)
        hashedIndex
        squareIndex++;
    }
    this.keys[hashedIndex] = key
    this.values[hashedIndex] = value
    this.limit++;
}
hashTable.prototype,get = function (key){
    let hashedIndex = this.hash(key) , squareIndex = 1;
    while(this.keys[hashedIndex] != key){
        hashedIndex = hashedIndex % this.size
        squareIndex++
    }
    return this.values[hashedIndex]
}

//Not working this have to be done 
//The hasing chapter have to be read again and agian 
//because it is important 
