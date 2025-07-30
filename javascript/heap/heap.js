/* 
  | Node Index | Left Child Index | Right Child Index | Parent Index              |
  | ---------- | ---------------- | ----------------- | ------------------------- |
  | `i`        | `2 * i + 1`      | `2 * i + 2`       | `Math.floor((i - 1) / 2)` |
 
  */

class Heap {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  insert(item) {
    // let arr = this.arr;
    // arr.push(item);
    this.arr[this.size++] = item;
    this.#bubbleUp();
  }
  #bubbleUp() {
    // let arr = this.arr;
    // let last_index = this.arr.length - 1; // 5
    let index = this.size - 1;

    while (index > 0 && this.arr[index] > this.arr[this.parent(index)]) {
      let parentIndex = this.parent(index);

      if (this.arr[index] > this.arr[parentIndex]) {
        // [arr[last_index], arr[parent]] = [arr[parent], arr[last_index]];
        this.#swap(this.arr, index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  remove() {
    if (this.isEmpty()) return null;

    // let lastIndex = this.arr.length - 1;
    // [this.arr[0], this.arr[lastIndex]] = [this.arr[lastIndex], this.arr[0]];

    // this.arr.pop();

    this.#swap(this.arr, 0, this.size - 1);
    const removed = this.arr.pop();
    this.size--;

    this.#bubbleDown();
    return removed;
  }
  #bubbleDown() {
    let index = 0;
    while (true) {
      let left = this.left(index); // 2 * i + 1 = 1
      let right = this.right(index); // 2 * i + 2 = 2
      let largest = index;

      if (left < this.size && this.arr[left] > this.arr[largest]) {
        largest = left;
      }

      if (right < this.size && this.arr[right] > this.arr[largest]) {
        largest = right;
      }
      if (largest !== index) {
        this.#swap(this.arr, index, largest);
        index = largest;
      } else {
        break;
      }
    }
  }
  #swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  isEmpty() {
    return this.size === 0;
  }
  printPretty(index = 0, prefix = "", isLeft = true) {
    if (index >= this.size) return;

    const rightIndex = this.right(index);
    const leftIndex = this.left(index);

    if (rightIndex < this.size) {
      this.printPretty(rightIndex, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└──" : "┌── ") + this.arr[index]);

    if (leftIndex < this.size) {
      this.printPretty(leftIndex, prefix + (isLeft ? "    " : "│   "), true);
    }
  }

  getParent() {
    for (let i = 0; i < this.size; i++) {
      let parent = this.parent(i);
      console.log(`Parent of ${this.arr[i]} is index ${parent}`);
    }
  }

  getNodes(value) {
    const index = this.arr.indexOf(value);
    if (index === -1 || index >= this.size) {
      console.log("Value is not in the heap.");
      return;
    }

    const leftIndex = this.left(index);
    const rightIndex = this.right(index);

    const leftValue =
      leftIndex < this.size ? this.arr[leftIndex] : "No Left Child";
    const rightValue =
      rightIndex < this.size ? this.arr[rightIndex] : "No Right Child";

    console.log(
      `Node ${value} has left child: ${leftValue}, right child: ${rightValue}`
    );
  }

  printAllNodesWithChildren() {
    for (let i = 0; i < this.size; i++) {
      const leftIndex = this.left(i);
      const rightIndex = this.right(i);

      const leftValue = leftIndex < this.size ? this.arr[leftIndex] : "No Left";
      const rightValue =
        rightIndex < this.size ? this.arr[rightIndex] : "No Right";

      console.log(
        `Node ${this.arr[i]} has left: ${leftValue}, right: ${rightValue}`
      );
    }
  }
}
module.exports = { Heap };
let numbers = [5, 3, 10, 1, 4, 2, 14];
const heap = new Heap();
// heap.insert(10);
// heap.insert(20);
// heap.insert(15);
// heap.insert(30);
// heap.insert(40);
// heap.insert(5);

// Heap sorting
for (num of numbers) heap.insert(num);
// while (!heap.isEmpty()) {
//   console.log(heap.remove());
// }
// for descending order
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = heap.remove(); // gets max first
// }
// console.log("Descending:", numbers);

// for ascending order
// for (let i = numbers.length - 1; i >= 0; i--) {
//   numbers[i] = heap.remove();
// }
// numbers.reverse();
// console.log("Ascending:", numbers);

// console.log(heap);
// heap.getParent();
// console.log(heap.getNodes(20));
// heap.remove();
// console.log(heap.arr);

// heap.printPretty();

// function bringMaxToFront(arr) {
//   let maxIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) maxIndex = i;
//   }

//   if (maxIndex !== 0) {
//     swap(arr, 0, maxIndex);
//   }
//   return arr;
// }
// let data = [3, 7, 1, 9, 2];
// console.log(bringMaxToFront(data));

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// let arr = [10, 20, 30, 40, 50];

// let grid = ["🧍", "⬜", "⬜"];
// function moveRight(grid) {
//   let playerIndex = grid.indexOf("🧍");
//   if (playerIndex < grid.length - 1) {
//     swap(grid, playerIndex, playerIndex + 1);
//   }

//   return grid;
// }

// console.log(moveRight(grid));
// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     swap(arr, i, j);
//   }
// }
// let deck = [1, 2, 3, 4, 5];
// shuffle(deck);
// console.log(deck);

// function reverse(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }

// let example = [1, 2, 3, 4, 5];
// console.log(reverse(example));

// console.log(arr);
