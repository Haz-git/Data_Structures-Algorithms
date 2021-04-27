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
    constructor(type = GRAPH_UNDIRECTED) {
        this.nodes = new Map();
        this.type = type;
    }

    addVertex(node) {

    }
}

Graph.UNDIRECTED = new Symbol('GRAPH_UNDIRECTED');
Graph.DIRECTED = new Symbol('GRAPH_DIRECTED');