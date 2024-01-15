//Weighted undirected graph and add vertices and edges.
//First create a new class for an undirected graph 
//The undirected graph shold have an object 
function UndirectedGraph(){
    this.edges ={}
}

UndirectedGraph.prototyp.addVertex = function (vertex){
    this.edges[vertex] = {}
}
UndirectedGraph.prototyp.addEdge =function(vertex1 , vertex2 , weight){
    if(weight ==undefined){
        weight = 0
    }
    this.edges[vertex1][vertex2] = weight
    this.edges[vertex2][vertex1] = weight
}
