class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.size = 0;
  }
  addFirst(item) {
    let node = new Node(item);
    if (this.head === null) {
      this.tail = this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  addLast(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  indexOf(item) {
    let index = 0;
    let itr = this.head;
    while (itr) {
      if (itr.data === item) return index;
      itr = itr.next;
      index++;
    }
    return -1;
  }
  contains(item) {
    return this.indexOf(item) != -1;
  }
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
      // return;
    }
    let second = this.head.next;
    this.head.next = null; // this removed the link b/t head and tail or this link --->
    this.head = second;

    this.size--;
  }
  removeLast() {
    if (this.isEmpty()) {
      throw new Error("List is Empty");
      // return;
    }
    // [10 -> 20 -> 30]
    // prev -> 20
    // last -> 30

    const prev = this.getPrevious(this.tail);
    this.tail = prev;
    this.tail.next = null;
    this.size--;

    // if (this.head === this.tail) {
    //   const removed = this.head;
    //   this.head = this.tail = null;
    //   this.size--;
    //   return removed;
    // }
    // let current = this.head;
    // while (current.next !== this.tail) {
    //   current = current.next;
    // }
    // const removed = this.tail;
    // this.tail = current;
    // this.tail.next = null;
    // this.size--;
    // return removed;
  }
  remove(item) {
    if (this.isEmpty()) {
      throw new Error("List is empty.");
    }

    if (this.head.data === item) {
      this.removeFirst();
    }

    let current = this.head;
    let prev = null;

    while (current !== null && current.data !== item) {
      prev = current;
      current = current.next;
    }

    if (current === null) {
      throw new Error("list is empty on the current state.");
    }
    prev.next = current.next;

    if (current === this.tail) {
      this.tail = prev;
    }

    current.next = null;
    this.size--;
  }

  removeEntry(key) {
    if (this.isEmpty()) {
      throw new Error("list is empty");
    }

    // Case 1: Entry to remove is the head
    if (this.head.data.key === key) {
      this.removeFirst();
    }

    // Case 2: Entry is in the middle or at the tail
    let current = this.head;
    let prev = null;

    while (current !== null && current.data.key !== key) {
      prev = current;
      current = current.next;
    }

    if (current === null) {
      // Key not found
      throw new Error("key not found");
    }

    prev.next = current.next;
    if (current === this.tail) {
      // If the removed node was the tail
      this.tail = prev;
    }
    current.next = null;
    this.size--;
  }

  toArray() {
    let array = [];
    let current = this.head;
    let index = 0;
    while (current != null) {
      array[index++] = current.data;
      //  array.push(current.data);
      current = current.next;
    }
    return array;
  }
  getPrevious(node) {
    let current = this.head;
    while (current != null) {
      if (current.next === node) return current;
      current = current.next;
    }
    return null;
  }
  isEmpty() {
    return this.head === null;
  }
  reverse() {
    let current = this.head;
    let prev = null;
    while (current != null) {
      let next;
      console.log("Next In Loop: ", next);

      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.tail.next = null;
    this.head = prev;
  }
  getKthFromTheEnd(k) {
    if (k <= 0 || this.isEmpty()) {
      throw new Error(
        "Invalid input: k must be > 0 and list must not be empty."
      );
    }
    let a = this.head;
    let b = this.head;

    for (let i = 0; i < k - 1; i++) {
      b = b.next;
      if (!b) {
        throw new Error("k is larger than the length of the list.");
      }
    }

    while (b != this.tail) {
      a = a.next;
      b = b.next;
    }
    return a.data;
  }
  getKthFromStart(k) {
    if (k <= 0 || this.isEmpty()) {
      throw new Error("Invalid input.");
    }
    let current = this.head;
    let count = 1;

    while (current && count < k) {
      current = current.next;
      count++;
    }
    return current.data;
  }
  print() {
    // this.isEmpty();
    let itr = this.head;
    let llstr = "";

    while (itr) {
      llstr += itr.data + "--->";
      itr = itr.next;
    }
    console.log(llstr);
  }
}

module.exports = { LinkedList };

// const list = new LinkedList();

// list.addFirst(10);
// list.addFirst(20);
// list.addFirst(30);
// list.addFirst(40);
// list.addFirst(50);

// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// list.addLast(50);

// list.addLast(4);

// console.log(list.indexOf(4));
// console.log(list.contains(5));
// list.removeFirst();
// list.removeLast();
// list.reverse();
// list.print();
// console.log(list.getKthFromTheEnd(2));
// console.log(list.getKthFromStart(2));

// console.log(list.toArray());
// console.log();
