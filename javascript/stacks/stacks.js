class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(item) {
    // this.top += 1
    this.data[++this.top] = item;
  }
  pop() {
    if (this.top === -1) return "Oops, the stack is empty!";
    const item = this.data[this.top];
    this.data.length = this.top; // Optional cleanup
    this.top--;
    return item;
  }
  peek() {
    return this.data[this.top];
  }
  empty() {
    return this.data.length === 0;
  }
}
const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.pop();
// // stack.pop();
// // stack.pop();
// console.log(stack);
// console.log(stack.peek());

module.exports = Stack;

// console.log(stack.pop());
// console.log(stack.empty());

// console.log(stack);
