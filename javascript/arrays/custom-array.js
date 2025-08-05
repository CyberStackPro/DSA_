class CustomArray {
  constructor() {
    this.length = 0;
    this.capacity = 1;
    this.storage = {};
  }

  push(item) {
    console.time("push");
    if (this.length >= this.capacity) {
      this.capacity *= 2;
      const newStorage = {};
      for (let i = 0; i < this.length; i++) {
        newStorage[i] = this.storage[i];
      }
      this.storage = newStorage;
    }
    this.storage[this.length] = item;
    this.length++;
    console.timeEnd("push");

    // console.log(`Capacity: ${this.capacity}`);
  }
  pop() {
    if (this.length === 0) return;
  }
  toArray() {
    const result = [];
    for (const key in this.storage) {
      result.push(this.storage[key]);
    }
    return result;
  }
}

const custom_array = new CustomArray();
custom_array.push(1);
custom_array.push(2);
custom_array.push(3);
custom_array.push(5);

console.log(custom_array.toArray());
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);

// console.log(custom_array);
