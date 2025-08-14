/* 
    Undirected / Unweighted graph means no direction, distance or costs

    ex: A, B, C, D
    
        A ---> B
        |      |
        |      |
        C ---> D

        A -> B
        A -> C
        B -> D

        and listing their connection called adjacency or closeness 
                  A
                 / \
                B   C
                 \
                  D

    */

class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class UndirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    if (!this.adjacencyList.has(value)) {
      const newNode = new GraphNode(value);
      this.adjacencyList.set(value, newNode);
    }
  }

  addEdge(node1, node2) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error("Node not found");
    }
    if (node1 === node2) {
      throw new Error(
        "Cannot connect a node to itself. this is [Undirected] Graph"
      );
    }

    let nodeA = this.adjacencyList.get(node1);
    if (!nodeA.edges.includes(node2)) {
      nodeA.edges.push(node2);
    }

    let nodeB = this.adjacencyList.get(node2);
    if (!nodeB.edges.includes(node1)) {
      nodeB.edges.push(node1);
    }

    return;
  }

  removeNode(value) {
    if (!this.adjacencyList.has(value)) {
      throw new Error(`${value} is not found on Graph`);
    }
    for (const [key, node] of this.adjacencyList) {
      const index = node.edges.indexOf(value);
      if (index !== -1) {
        node.edges.splice(index, 1);
      }
    }

    this.adjacencyList.delete(value);
  }
  removeEdge() {}

  printPretty() {
    for (const [key, node] of this.adjacencyList) {
      console.log(`${key}: ${JSON.stringify(node.edges)}`);
    }
  }
}

const graph = new UndirectedGraph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "C");
graph.addNode("D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

// graph.removeNode("C");

graph.printPretty();

console.dir(graph, { depth: null });
