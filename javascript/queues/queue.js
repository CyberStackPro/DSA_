class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
    // this.size = 0;
  }
  enqueue(item) {
    this.items[this.rearIndex++] = item;
  }
  dequeue() {
    if (this.is_empty()) {
      throw new Error("Queue is empty");
    }
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    console.log("DEQUEUE: ", item);

    return item;
  }
  peek() {
    if (this.is_empty()) {
      return "Queue is emty";
    }
    return this.items[this.frontIndex];
  }
  is_empty() {
    return this.rearIndex - this.frontIndex === 0;
  }
  size() {
    return this.rearIndex - this.frontIndex;
  }
}
// module.exports = Queue;

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
console.log(queue);
