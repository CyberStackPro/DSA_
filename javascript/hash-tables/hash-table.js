class HashTable {
  constructor(size) {
    this.size = size;
  }

  hash_function(key) {
    let hash_value = 0;
    for (let char in key) {
      hash_value += char.charAt();
    }
    return hash_value % this.size;
  }
  put(k, v) {}
}
