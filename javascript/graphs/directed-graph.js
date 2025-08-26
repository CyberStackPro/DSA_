class GraphNode {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class DirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    if (!this.adjacencyList.has(value)) {
      const newNode = new GraphNode(value);
      this.adjacencyList.set(value, newNode);
    }
    // console.log(this.adjacencyList);
  }

  addEdge(node1, node2) {
    if (node1 === null || node2 === null) {
      throw new Error("node can't be null");
    }
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error("Node not found");
    }

    let nodeA = this.adjacencyList.get(node1);
    if (!nodeA.edges.includes(node2)) {
      nodeA.edges.push(node2);
    }
    return;
  }

  removeEdge(node1, node2) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error("Node not found");
    }
    // if (node1 === node2) {
    //   throw new Error(
    //     "Cannot remove  a node to itself. this is [Undirected] Graph"
    //   );
    // }

    let nodeA = this.adjacencyList.get(node1);
    if (nodeA.edges.includes(node2)) {
      nodeA.edges = nodeA.edges.filter((n) => n !== node2);
    }
    return;
  }

  removeNode(value) {
    if (!this.adjacencyList.get(value)) {
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
  hasEdge(node1, node2) {
    if (!this.adjacencyList.has(node1)) return false;
    return this.adjacencyList.get(node1).edges.includes(node2);
  }
  numberOfEdges() {
    let count = 0;

    for (const [key, node] of this.adjacencyList) {
      count += node.edges.length;
    }
    return count;
  }
  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) {
      throw new Error("Node not found");
    }
    let nodeA = this.adjacencyList.get(node);
    return nodeA.edges;
  }

  // dfs(startNode) {
  //   let visited = new Set();
  //   let result = [];

  //   this.#dfs(startNode, visited, result);

  //   return result;
  // }
  // #dfs(node, visited, result) {
  //   visited.add(node);
  //   result.push(node);

  //   for (let neighbor of this.getNeighbors(node)) {
  //     if (!visited.has(neighbor)) {
  //       this.#dfs(neighbor, visited, result);
  //     }
  //   }
  // }
  dfs(start) {
    if (!this.adjacencyList.has(start)) {
      throw new Error(`Start node "${start}" not found`);
    }

    const visited = new Set();
    const stack = [start];
    const order = [];

    while (stack.length) {
      const current = stack.pop();
      if (visited.has(current)) continue;

      visited.add(current);
      order.push(current);

      const neighbors = this.getNeighbors(current);

      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
    return order;
  }
  bfs(startNode) {
    let visited = new Set();
    let result = [];
    let queue = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length) {
      const current = queue.shift();

      result.push(current);

      const neighbors = this.getNeighbors(current);

      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) queue.push(neighbor);
      }
    }

    return result;
  }

  size() {
    return this.adjacencyList.size;
  }

  clear() {
    this.adjacencyList.clear();
  }

  printPretty() {
    for (const [key, node] of this.adjacencyList) {
      let edges = node.edges.length ? node.edges.join(", ") : "∅";
      console.log(`${key} -> ${edges}`);
    }
  }
}

const graph = new DirectedGraph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log(graph.dfs("A"));
console.log(graph.bfs("A"));

// console.log(graph.numberOfEdges());

graph.printPretty();
// console.dir(graph, { depth: null });
