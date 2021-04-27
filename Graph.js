export class graphNode {
    constructor(value) {
        this.value = value;
        this.adjacents = [];
    }

    addAdjacent(node) {
        this.adjacents.push(node);
        return this.adjacents;
    }

    removeAdjacent(node) {
        if (this.adjacents.indexOf(node) > -1) {
            this.adjacents.splice(this.adjacents.indexOf(node), 1);
            return node;
        } else {
            return undefined;
        }
    }

    getAdjacents() {
        return this.adjacents;
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}

export class Graph {
    constructor(type = Graph.UNDIRECTED) {
        this.nodes = new Map();
        this.type = type;
    }

    //Basic Functions:

    addVertex(value) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const newVertex = new graphNode(value);
            this.nodes.set(value, newVertex);
            return newVertex;
        }
    }

    removeVertex(value) {
        if (!this.nodes.has(value)) {
            return undefined;
        } else {
            let temp = this.nodes.get(value);

            for (node in this.nodes.values()) {
                node.removeAdjacent(temp);
            }

            return this.nodes.delete(value);
        }
    }

    addEdge(src, dest) {
        let srcNode = this.addVertex(src);
        let destNode = this.addVertex(dest);

        srcNode.addAdjacent(destNode);

        if (this.type === Graph.UNDIRECTED) destNode.addAdjacent(srcNode);

        return [srcNode, destNode];
    }

    removeEdge(src, dest) {
        let srcNode = this.nodes.get(src);
        let destNode = this.nodes.get(dest);

        if (srcNode && destNode) srcNode.removeAdjacent(destNode);

        if (this.type === Graph.UNDIRECTED) destNode.removeAdjacent(srcNode);

        return [srcNode, destNode];

    }

    getNodes() {
        return this.nodes;
    }

    //Algorithm Implementations:

    //Topological Sort:

    topSortHelper(node, explored, s) {
        //The helper will add the node to the explored list.
        explored.add(node);

        //This topSortHelper is a recursive function, it checks the adjacency list of the node, and explores every "dependency". Think of DFS--It will go down a branch entirely and then push to stack when coming back up.
        node.getAdjacents().forEach(n => {
            if (!explored.has(n)) {
                this.topSortHelper(n, explored, s);
            }
        });

        s.push(node);
    }

    topSort() {
        //This topSort algorithm is implemented via DFS in mind.
        let s = [];
        let explored = new Set();

        //For every unexplored node in our graph, we'll send it to the helper.
        this.nodes.forEach(node => {
            if (!explored.has(node)) {
                this.topSortHelper(node, explored, s);
            }
        });

        //Because we use a stack, we can pop() the items out in correct order (FILO), or, we can reverse this array and return the items as an array in the correct order.
        return s.reverse();
    }
}

Graph.UNDIRECTED = Symbol('GRAPH_UNDIRECTED');
Graph.DIRECTED = Symbol('GRAPH_DIRECTED');