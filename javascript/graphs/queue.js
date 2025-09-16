class GraphQueue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }
  enqueue(item) {
    this.items[this.rearIndex++] = item;
  }

  dequeue() {
    if (this.is_empty()) {
      throw new Error("Queue is emopty");
    }
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;

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

class PrirorityQueue {
  constructor(element, prirority, capacity) {
    // this.element = element;
    // this.prirority = prirority;
    this.items = [];
    this.count = 0;
  }

  enqueue(item) {
    // Shifting Items
    let i;
    for (i = this.count - 1; i >= 0; i--) {
      if (this.items[i] > item) this.items[i + 1] = this.items[i];
      else break;
    }
    this.items[i + 1] = item;
    this.count++;
  }
  dequeue() {
    if (this.is_empty()) {
      throw new Error("Queue is emopty");
    }
    this.count--;
    return this.items.shift();
  }
}

module.exports = { GraphQueue, PrirorityQueue };
