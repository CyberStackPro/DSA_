const { Heap } = require("./heap");

class MaxHeap {
  heapify(array) {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
      this.#heapify(array, i);
    }
    return array;
  }
  #heapify(arr, index) {
    let largerIndex = index;

    let leftIndex = index * 2 + 1;
    if (leftIndex < arr.length && arr[leftIndex] > arr[largerIndex]) {
      largerIndex = leftIndex;
    }

    let rightIndex = index * 2 + 2;
    if (rightIndex < arr.length && arr[rightIndex] > arr[largerIndex]) {
      largerIndex = rightIndex;
    }

    if (index === largerIndex) return;

    this.#swap(arr, index, largerIndex);
    this.heapify(arr, largerIndex);
  }

  #swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  getKthLargest(arr, k) {
    const heap = new Heap();
    for (let num of arr) {
      heap.insert(num);
    }
    for (let i = 0; i < k - 1; i++) {
      heap.remove();
    }
    return heap.max();
  }
}

const maxHeap = new MaxHeap();

let numbers = [5, 3, 10, 1, 4, 2, 14];

// console.log(maxHeap.heapify(numbers));
console.log(maxHeap.getKthLargest(numbers, 1));
