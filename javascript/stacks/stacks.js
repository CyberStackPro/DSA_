class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(item) {
    this.data[++this.top] = item;
    // this.data.push(item);
  }
  pop() {
    // if (this.data.length === 0) return "Oops, the stack is empty!";
    // // this.data[--this.top];
    // delete this.data[this.top];
    // return this.data[this.top];
    if (this.data.length === 0) return "Oops, the stack is empty!";
    return this.data.pop();
  }
  empty() {
    return this.data.length === 0;
  }
}
const stack = new Stack();
module.exports = Stack;
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());
// console.log(stack.empty());

// console.log(stack);
