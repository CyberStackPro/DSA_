function nonerepated(str = "") {
  let charCounts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log("String [I]", char);
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCounts[char] == 1) {
      return char;
    }
  }
  console.log("Char Count: ", charCounts);
  return "";
}

// console.log(nonerepated("a green apple"));

function firstNoneRepatedCharacter(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log(char);

    // console.log("Char Count: ", charCount);
    if (charCount[char] === 1) {
      return char;
    }
  }

  return "";
}
// console.log(firstNoneRepatedCharacter("green apple"));

function findFirstRepatedChar(str) {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log("Char: ", char, set);

    if (set.has(char)) return char;

    set.add(char);
  }

  return "";
}
// console.log(findFirstRepatedChar("green apple"));

function simpleHash(key, tableSize) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % tableSize;
}
// console.log(simpleHash("123456", 100));
const string = "pranges";
console.log("lll: ", string.charCodeAt());

// 1. Create a hash map
const userProfile = new Map();

// 2. Insert / Update a key-value pair
userProfile.set("username", "brian");
userProfile.set("level", 10);
userProfile.set("tags", ["dev", "cybersec"]);

userProfile.set("level", 11); // Updates the value
// console.log("Updated profile:", userProfile);

// console.log("Initial profile:", userProfile);

// 3. Get a value by its key
const level = userProfile.get("level");
// console.log(`Level: ${level}`);

// 4. Check if a key exists
// if (userProfile.has("tags")) {
//   console.log("Tags key exists.");
// }

// 5. Delete a key-value pair
userProfile.delete("tags");
// console.log("Final profile:", userProfile);
