class PrirorityQueue {
  constructor(comparator = (a, b) => a.priority - b.priority) {
    // this.element = element;
    // this.prirority = prirority;
    this.items = [];
    // this.count = 0;
    this.comparator = comparator;
  }

  // add(item) {
  //   // Shifting Items
  //   let i;
  //   for (i = this.count - 1; i >= 0; i--) {
  //     if (this.items[i] > item) this.items[i + 1] = this.items[i];
  //     else break;
  //   }
  //   this.items[i + 1] = item;
  //   this.count++;
  // }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    let i = 0;
    while (
      i < this.items.length &&
      this.comparator(this.items[i], queueElement) <= 0
    ) {
      i++;
    }
    this.items.splice(i, 0, queueElement);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[0];
  }
}

const queue = new PrirorityQueue();
queue.enqueue(10, 1);
queue.enqueue(50, 4);
queue.enqueue(20, 3);
queue.enqueue(30, 2);
console.log(queue);
