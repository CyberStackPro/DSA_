class Queue {
  constructor() {
    this.queue = [];
    // this.size = 0;
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.is_empty()) {
      return "Queue is empty";
    }
    this.queue.pop(0);
  }
  peek() {
    if (this.is_empty()) {
      return "Queue is emty";
    }
    return this.queue[0];
  }
  is_empty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
}
module.exports = Queue;

// const queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue);
