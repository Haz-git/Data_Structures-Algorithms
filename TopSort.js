import { Graph } from './Graph.js';
import { graphNode } from './Graph.js';

let g = new Graph(Graph.DIRECTED);

g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("B", "G");

console.log(g.topSort());
