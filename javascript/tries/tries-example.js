const fs = require("fs");
const { Trie } = require("./tries");

const tries = new Trie();

// you can try wih this words also https://raw.githubusercontent.com/dwyl/english-words/master/words.txt

const words = fs
  .readFileSync("google-10000-english-no-swears.txt", "utf8")
  .split("\n");

console.time("Insertion Time");
for (let word of words) {
  tries.insert(word.trim().toLowerCase());
}
console.timeEnd("Insertion Time");

console.time("Search Time");
console.log(tries.contains("example"));
console.timeEnd("Search Time");

console.time("Autocomplete Time");
const results = tries.autocomplete("car");
console.timeEnd("Autocomplete Time");

console.log(results.slice(0, 10));
