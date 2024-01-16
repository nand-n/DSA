function DirectedGraph(){
    this.edges =[]
}

DirectedGraph.prototype.addVertex = function(vertex){
    this.edges[vertex] = {}
}

DirectedGraph.prototype.addEdge = function(originVertex , destVertex , weight){
    if(weight == undefined){
        weight = 0;
    }
    this.edges[originVertex][destVertex] = weight
}

DirectedGraph.prototype.removeEdge = function(vertex){
    for(let adjecentVertex in this.edges[vertex]){
        this.removeEdge(adjecentVertex , verte)
    }
    delete this.edges[vertex]
}
