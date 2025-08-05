const { LinkedList } = require("../arrays/linked-list");

class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class NumHashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(this.size);
  }
  hash_function(key) {
    // let hash_value = 0;
    // for (let char in key) {
    //   hash_value += char.charAt();
    // }
    const numKey = Number(key);
    if (isNaN(numKey)) {
      throw new Error("Has key must be a number.");
    }
    return numKey % this.size;
    // return key % this.entries.toArray().length;
  }
  put(k, v) {
    const index = this.hash_function(k);
    // console.log("INDEX_HASH: ", index);

    // null || undefined
    if (!this.entries[index]) {
      this.entries[index] = new LinkedList();
    }
    // console.log("Entry: ", this.entries[index]);

    const bucket = this.entries[index];
    let current = bucket.head;
    while (current !== null) {
      if (current.data.key === k) {
        current.data.value = v;
        return;
      }
      current = current.next;
    }
    const newEntry = new Entry(k, v);
    bucket.addLast(newEntry);
  }
  get(k) {
    const index = this.hash_function(k);
    const bucket = this.entries[index];

    // console.log("Bucket: ", bucket);

    // If bucket doesn't exist or is empty, key is not found
    if (!bucket || bucket.isEmpty()) {
      return undefined; // Or null, depending on desired behavior
    }

    // Iterate through the LinkedList (bucket) to find the key
    let current = bucket.head;
    while (current !== null) {
      if (current.data.key === k) {
        return current.data.value; // Found the key, return its value
      }
      current = current.next;
      // for (let key in bucket) bucket.print(current[key]);
    }

    // Key not found in this bucket
    return undefined;
  }

  remove(k) {
    const index = this.hash_function(k);
    const bucket = this.entries[index];

    if (bucket === undefined) {
      throw new Error("bucket is empty or undefined");
    }
    for (let entry in bucket.head.data) {
      console.log("ENNNNN: ", entry);
      if (entry.key === k) {
        bucket.removeEntry(key);

        return;
      }
    }
  }
}

const myNumHashTable = new NumHashTable(7);

console.log("Putting entries (numeric keys):");
myNumHashTable.put(10, "apple"); // 10 % 7 = 3
console.log("10:", myNumHashTable.get(10)); // apple
myNumHashTable.put(17, "banana"); // 17 % 7 = 3 (Collision with 10!)
console.log("17:", myNumHashTable.get(17)); // banana
myNumHashTable.put(3, "cherry"); // 3 % 7 = 3 (Collision again!)
console.log("3:", myNumHashTable.get(3)); // cherry
myNumHashTable.put(20, "grape"); // 20 % 7 = 6
console.log("20:", myNumHashTable.get(20)); // grape
myNumHashTable.put(0, "zero"); // 0 % 7 = 0
console.log("0:", myNumHashTable.get(0)); // zero

// Updating
console.log("\nUpdating '10':");
myNumHashTable.put(10, "red apple");
console.log("10 (updated):", myNumHashTable.get(10));

// console.log("\nRetrieving non-existent key:");
// console.log("5:", myNumHashTable.get(5)); // undefined

// console.log("\nRemoving '17':");
// myNumHashTable.remove(17);
// console.log("17:", myNumHashTable.get(17)); // undefined

console.log("\nHash Table Structure (numeric keys, simplified view):");
for (let i = 0; i < myNumHashTable.size; i++) {
  const bucket = myNumHashTable.entries[i];
  if (bucket && !bucket.isEmpty()) {
    console.log(
      `Bucket ${i}: [${bucket
        .toArray()
        .map((e) => `${e.key}:${e.value}`)
        .join(", ")}]`
    );
  } else {
    console.log(`Bucket ${i}: (empty)`);
  }
}
