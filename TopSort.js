const topSortHelper = (node, explored, s) => {
    explored.add(node);

    this.edges[node].forEach(n => {
        if (!explored.has(n)) {
            this.topSortHelper(n, explored, s);
        }
    });

    s.push(node);
}

const topSort = () => {
    let s = []; //Stack;
    let explored = new Set();

    this.nodes.forEach(node => {
        if (!explored.has(node)) {
            this.topSortHelper(node, explored, s);
        }
    });

    while (!s.isEmpty()) {
        console.log(s.pop());
    }
}

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addDirectedEdge("A", "C");
g.addDirectedEdge("A", "B");
g.addDirectedEdge("A", "D");
g.addDirectedEdge("C", "D");
g.addDirectedEdge("D", "E");
g.addDirectedEdge("E", "F");
g.addDirectedEdge("B", "G");