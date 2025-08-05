// CustomeArray
  class MyCustomeArray {
    constructor(capacity) {
      this.length = 0;
      this.capacity = capacity;
    }
    push(item) {
      if (this.length >= this.capacity) {
        // adding Dynamic Array
        // Double Capacity
        this.capacity *= 2;
        // Create a new underlying
        const newStorage = {};
        for (let i = 0; i < this.length; i++) {
          newStorage[i] = this[i];
        }
        // Reassign “this”’s properties to the new storage
        for (let i = 0; i < this.length; i++) {
          this[i] = newStorage[i];
        }
        // throw new Error("Array out of Range: cannot insert more items.");
      }
      this[this.length] = item;
      this.length++;
      return this.length;
    }
    // Resize method: doubles the capacity and reassigns elements.
    resize() {
      let newCapacity = this.capacity * 2;
      let newStorage = {};
  
      // Copy over the elements from the old storage into newStorage.
      for (let i = 0; i < this.length; i++) {
        newStorage[i] = this[i];
      }
  
      // Reassign the new storage back to this:
      // This step is crucial. It "updates" our dynamic array so that it holds the same elements,
      // but now there is room for more items. Without this, our dynamic array would still be
      // working with the old, small storage.
      for (let i = 0; i < this.length; i++) {
        this[i] = newStorage[i];
      }
  
      // Update the capacity to reflect the larger space.
      this.capacity = newCapacity;
      console.log("Resized to new capacity:", this.capacity);
    }
    pop() {
      if (this.length === 0) {
        throw new Error("Array is empty: nothing to remove");
      }
      const item = this[this.length - 1];
      // console.log(item);
      delete this[this.length - 1];
      this.length--;
      return item;
    }
    itemOf(index) {
      if (index < 0 || index >= this.length) {
        result - 1;
      }
      return this[index];
    }
  
    indexOf(item) {
      // if (index < 0 || index >= this.length) {
      //   return -1; // or throw an error
      // }
      for (let i = 0; i < this.length; i++) {
        if (this[i] === item) {
          return i;
        }
      }
      return -1;
      // return this[index];
    }
    insert(index, value) {
      // Check any room to insert
      if (this.length >= this.capacity) {
        throw new Error("Array out of Range: cannot insert more items.");
      }
  
      // Validating index
      if (index < 0 || index > this.length) {
        throw new Error("Index out of bounds.");
      }
      // let item = this.length;
  
      // Shift All element
      for (let i = this.length; i > index; i--) {
        // console.log("ccccc", this[i]);
        // console.log("Sadjn sdaf", (this[i] = this[i - 1]));
        this[i] = this[i - 1];
        // this[i] += value;
      }
  
      // Inser New Value
      this[index] = value;
  
      // increase he lengh
      this.length++;
      this.capacity += 1;
      return this.length;
    }
    delete(index) {
      if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds.");
      }
      // console.log("Before REVERSED", this[i]);
  
      for (let i = index; i < this.length - 1; i++) {
        console.log("REVERSED", this[i]);
        this[i] = this[i + 1];
      }
  
      // Delete value
      // this[index] = index;
  
      delete this[this.length - 1];
      this.length--;
      return index;
    }
  }

const mca = new MyCustomeArray(4);
// Insert
mca.push(10);
mca.push(20);
mca.push(30);

// Delete
// mca.pop();
// mca.pop();
// mca.pop();

// Finding Index
// mca.indexOf(10);
// mca.indexOf(10);
//
// Inserion
mca.insert(1, 60);
// mca.insert(1, 60);
// mca.insert(1, 60);

// Deletion
// mca.delete(1);

console.log(mca);
console.log(mca.indexOf(20));
// console.log(mca.itemOf(2));
// console.log(mca.delete(1));
