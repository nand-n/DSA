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
var g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('B', 'A');
g.addEdge('D', 'C');
g.addEdge('D', 'B');
g.addEdge('B', 'A');
g.addEdge('A', 'F');
g.addEdge('E', 'C');
var topologicalOrder = g.topologicalSort();
console.log(g);
// DirectedGraph {
// V: 6,
// E: 6,
// edges:
//  { A: { F: 0 },
//    B: { A: 0 },
//    C: {},
//    D: { C: 0, B: 0 },
//    E: { C: 0 },
//    F: {} } }
console.log(topologicalOrder); // [ 'E', 'D', 'C', 'B', 'A', 'F' ]