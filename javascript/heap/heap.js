/* 
  | Node Index | Left Child Index | Right Child Index | Parent Index              |
  | ---------- | ---------------- | ----------------- | ------------------------- |
  | `i`        | `2 * i + 1`      | `2 * i + 2`       | `Math.floor((i - 1) / 2)` |
 
  */

class Heap {
  constructor() {
    this.arr = [];
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
    let arr = this.arr;
    arr.push(item);

    let last_index = this.arr.length - 1; // 5

    while (last_index > 0 && arr[last_index] > arr[this.parent(last_index)]) {
      // true for  our example
      let parent = this.parent(last_index); //1=20

      if (arr[last_index] > arr[parent]) {
        // [arr[last_index], arr[parent]] = [arr[parent], arr[last_index]];
        this.swap(arr, last_index, parent);
        last_index = parent;
      } else {
        break;
      }
    }
  }
  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  printPretty(index = 0, prefix = "", isLeft = true) {
    if (index >= this.arr.length) return;

    const rightIndex = this.right(index);
    const leftIndex = this.left(index);

    if (rightIndex < this.arr.length) {
      this.printPretty(rightIndex, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└──" : "┌── ") + this.arr[index]);

    if (leftIndex < this.arr.length) {
      this.printPretty(leftIndex, prefix + (isLeft ? "    " : "│   "), true);
    }
  }

  getParent() {
    for (let i = 0; i < this.arr.length; i++) {
      let parent = this.parent(i);
      //   console.log(this.arr[i]);
      console.log(`Parrent of ${this.arr[i]} is ${parent}`);
    }
  }
  getNodes(value) {
    const index = this.arr.indexOf(value);
    console.log(`Index of ${value} is: `, index);

    if (value === -1) {
      console.log("value is not on the heap!");
      return;
    }
    const leftIndex = this.left(index);
    const rightIndex = this.right(index);

    const leftValue =
      this.arr[leftIndex] !== undefined ? this.arr[leftIndex] : "No Left Child";
    const rightValue =
      this.arr[rightIndex] !== undefined
        ? this.arr[rightIndex]
        : "No Right Child";

    console.log(
      `Node ${value} has left child: ${leftValue}, right child: ${rightValue}`
    );
  }
  printAllNodesWithChildren() {
    for (let i = 0; i < this.arr.length; i++) {
      const leftIndex = this.left(i);
      const rightIndex = this.right(i);

      const leftValue =
        this.arr[leftIndex] !== undefined ? this.arr[leftIndex] : "No Left";
      const rightValue =
        this.arr[rightIndex] !== undefined ? this.arr[rightIndex] : "No Right";

      console.log(
        `Node ${this.arr[i]} has left: ${leftValue}, right: ${rightValue}`
      );
    }
  }

  remove() {}
}
const heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(30);
heap.insert(40);
heap.insert(5);

// console.log(heap);
// heap.getParent();
// heap.printPretty();
// console.log(heap.getNodes(20));

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
