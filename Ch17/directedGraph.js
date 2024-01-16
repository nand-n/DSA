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
DirectedGraph.prototype.traverseeBFS = function(vertex , fn){
    let queue =[] , visited ={}
    queue.push(vertex)
    while(queue.length){
         vertex = queue.shift()
         if(!visited[vertex]){
            visited[vertex] = true
            fn(vertex)
            for(let adjecentVertex in this.edges[vertex]){
                queue.push(adjecentVertex)
            }
         }
    }
}

DirectedGraph.prototype.traverseDFS = function(vertex , fn){
    let visited
    this._traverseDFS(vertex , visited , fn)
}

DirectedGraph.prototype._traverseDFS = function(vertex , visited , fn){
    visited[vertex] = true
    fn(vertex)
    for(let adjecentVertex in this.edges[vertex]){
        if(!visited[adjecentVertex]){
            this._traverseDFS(adjecentVertex , visited , fn)
        }
    }
}


export default DirectedGraph