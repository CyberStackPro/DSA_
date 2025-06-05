const Stack = require("../stacks/stacks");

class QueueWithTwoStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(item) {
    this.stack1.push(item);
  }
  dequeue() {
    if (this.isempty()) {
      throw new Error("Queue is Empty");
    }
    if (this.stack2.empty()) {
      while (!this.stack1.empty()) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
  }
  isempty() {
    return this.stack1.empty() && this.stack2.empty();
  }
  peek() {
    if (this.isempty()) {
      throw new Error("Queue is Empty");
    }
    if (this.stack2.empty()) {
      while (!this.stack1.empty()) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.peek();
    }
  }
}
const queue_stack = new QueueWithTwoStacks();
queue_stack.enqueue(10);
queue_stack.enqueue(20);
queue_stack.enqueue(30);
queue_stack.enqueue(40);
queue_stack.dequeue();
// queue_stack.dequeue();
// let first = queue_stack.dequeue();

console.log(queue_stack);
