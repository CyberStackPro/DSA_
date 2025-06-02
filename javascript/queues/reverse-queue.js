const Stack = require("../stacks/stacks");
const Queue = require("./queue");

function reverse_queue(array) {
  const queue = new Queue();
  for (let i = 0; i < array.length; i++) {
    queue.enqueue(array[i]);
    console.log("Queue in for loop", array[i]);

    // result.push(queue.queue[i]);
  }
  let result = [];

  while (!queue.is_empty()) {
    result.unshift(queue.dequeue());
  }
  return result;
}

function reverse_queue_with_stack(queue) {
  const stack = new Stack();
  while (!queue.is_empty()) stack.push(queue.dequeue());
  while (!stack.empty()) queue.enqueue(stack.pop());
  return queue;
}
// console.log(reverse_queue([10, 20, 30]));
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(reverse_queue_with_stack(queue));
