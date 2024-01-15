//Weighted undirected graph and add vertices and edges.
//First create a new class for an undirected graph 
//The undirected graph shold have an object 
function UndirectedGraph(){
    this.edges ={}
}

UndirectedGraph.prototyp.addVertex = function (vertex){
    this.edges[vertex] = {}
}

