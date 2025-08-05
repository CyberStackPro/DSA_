class MinHeap {
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
    this.arr[this.size++] = item;
    this.#bubbleUp();
  }
  #swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  #bubbleUp() {
    let index = this.size - 1;
    // console.log("INDEX: ", index);

    /* 
        PARENT NODE
     4 = (4-1) / 2 = 1 
     3 = (3-1) / 2 = 1
     1 = (1-1) / 2 = 0
     2 = (2-1) / 2 = 0
            LEFT
    
    */
    let parentIndex = this.parent(index);
    console.log("PARENT_INDEX: ", parentIndex, "INDEX: ", index);

    while (index > 0 && this.arr[index] < this.arr[parentIndex]) {
      /* 
            first time we insert 4 so 4 is new we don't need to compare we just break
            next we insert 3 so we have 4 that can be compared to 4 we just compare so 3 < 4 = true
            so we swap [3,4]
            and so on 
            */
      if (this.arr[index] < this.arr[parentIndex]) {
        this.#swap(this.arr, index, parentIndex);
        index = parentIndex;
        parentIndex = this.parent(index);
      } else {
        break;
      }
    }
  }
  //   #bubbleDown(index){

  //   }
  min() {
    if (this.isEmpty()) throw new Error("Heap is Empty");
    return this.arr[0];
  }
  isEmpty() {
    return this.size === 0;
  }
  //   getKthSmallest(arr, k) {
  //     for (let num of arr) this.insert(num);

  //     for (let i = 0; i < k - 1; i++) {
  //       this.arr.pop();
  //     }
  //   }

  printPretty(index = 0, prefix = "", isLeft = true) {
    if (index >= this.size) return;

    const rightIndex = this.right(index);
    const leftIndex = this.left(index);

    if (rightIndex < this.size) {
      this.printPretty(rightIndex, prefix + (isLeft ? "|  " : "    "), false);
    }
    console.log(prefix + (isLeft ? "└──" : "┌── ") + this.arr[index]);

    if (leftIndex < this.size) {
      this.printPretty(leftIndex, prefix + (isLeft ? "   " : "|   "), true);
    }
  }
}

const minHeap = new MinHeap();

// minHeap.insert(4);
// minHeap.insert(3);
// minHeap.insert(1);
// minHeap.insert(2);

minHeap.insert(100);
minHeap.insert(50);
minHeap.insert(25);
minHeap.insert(10);

console.log(minHeap);
minHeap.min();
minHeap.printPretty();
