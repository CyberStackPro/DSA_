class WeightedNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  addNode(value) {
    if (!this.nodes.has(value)) {
      const newNode = new WeightedNode(value);
      this.nodes.set(value, newNode);
    }
  }

  addEdge(from, to, weight) {
    if (!this.nodes.has(from) || !this.nodes.has(to)) {
      throw new Error("Node not found");
    }

    const newEdge = new Edge(from, to, weight);
    this.edges.push(newEdge);

    this.nodes.get(from).edges.push({ node: to, weight });

    this.nodes.get(to).edges.push({ node: from, weight });
  }

  //   printPretty() {
  //     for (const [key, node] of this.nodes) {
  //       console.log(`${key}: ${this.edges.map((e) => e).join(", ")}`);
  //     }
  //   }
  printPretty() {
    for (const [key, node] of this.nodes) {
      const connections = node.edges
        .map((edge) => `${edge.node}, (weight: ${edge.weight})`)
        .join(", ");
      console.log(`${key} --> ${connections}`);
    }
  }
  getShortestDistance(from, to) {
    // const queue = new PromiseRejectionEvent
  }
}

const wgraph = new WeightedGraph();

wgraph.addNode("A");
wgraph.addNode("B");
wgraph.addNode("C");

wgraph.addEdge("A", "B", 2);
wgraph.addEdge("A", "C", 3);

wgraph.printPretty();
// console.log(wgraph);
