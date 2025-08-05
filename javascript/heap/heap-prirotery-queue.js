const { Heap } = require("./heap");

class PrirorityQueueHeap {
  constructor() {
    this.heap = new Heap();
  }

  enqueue(item) {
    this.heap.insert(item);
  }
  dequeue() {
    this.heap.remove();
  }
  isEmpty() {
    return this.heap.isEmpty();
  }
}

const prirority = new PrirorityQueueHeap();
prirority.enqueue(10);
prirority.enqueue(20);
prirority.enqueue(30);
prirority.enqueue(5);

console.log(prirority);
