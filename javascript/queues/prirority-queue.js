class PrirorityQueue {
  constructor(element, prirority, capacity) {
    // this.element = element;
    // this.prirority = prirority;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    // Shifting Items
    let i;
    for (i = this.count - 1; i >= 0; i--) {
      if (this.items[i] > item) this.items[i + 1] = this.items[i];
      else break;
    }
    this.items[i + 1] = item;
    this.count++;
  }
}

const queue = new PrirorityQueue();
queue.add(10);
queue.add(50);
queue.add(20);
queue.add(30);
console.log(queue);
