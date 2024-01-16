import DirectedGraph from "./directedGraph";

{/**
    Topological sorting has a visited set to ensure that the recurive call does not result 
    in an infinite loop. 
    For a given node , that node is added to the visited set, and its  neighbours that have 
    not been visited are visited in the next recurive call. 
    At the end of the recursive call , unshifted is used 
*/}

DirectedGraph.prototype.topologicalSortUtil = function(v, visited , stack){
    visited.add(v)
    for(let item in this.edges[v]){
        if(visited.has(item) ==false){
            this.topologicalSortUtil(item , visited , stack)
        }
    }
    stack.unshift(v)
}
DirectedGraph.prototype.topologicalSort = function(){
    let visited = {} , stack =[]
    for(let item in this.edges){
        if(visited.has(item) ==false){
            this.topologicalSortUtil(item , visited, stack)
        }
    }
    return stack
}