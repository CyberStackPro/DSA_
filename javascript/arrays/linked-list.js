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
    if (this.head === null) this.tail = this.head = node;
    node.next = this.head;
    this.head = node;
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
    let next;
    while (current != null) {
      console.log("Next In Loop: ", next);

      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    this.head = prev;
    // return prev
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

const list = new LinkedList();

list.addFirst(1);
list.addFirst(2);
list.addFirst(3);

list.addLast(4);

// console.log(list.indexOf(4));
// console.log(list.contains(5));
// list.removeFirst();
// list.removeLast();
list.reverse();
list.print();
console.log(list.toArray());
// console.log();
