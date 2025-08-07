class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
  hasChild(ch) {
    return this.children.has(ch);
  }
  addChild(ch) {
    this.children.set(ch, new TrieNode(ch));
  }
  getChild(ch) {
    return this.children.get(ch);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      //   if (!currentNode.children.has(char)) {
      //     currentNode.children.set(char, new TrieNode());
      //   }
      //   currentNode = currentNode.children.get(char);

      /* 
            ABSTRACTION WAY
      */

      if (!currentNode.hasChild(char)) {
        currentNode.addChild(char);
      }
      currentNode = currentNode.getChild(char);
    }

    currentNode.isEndOfWord = true;
  }
  contains(word) {
    let currentNode = this.root;
    for (let ch of word) {
      if (!currentNode.hasChild(ch)) {
        return false;
      }
      currentNode = currentNode.getChild(ch);
    }
    return currentNode.isEndOfWord;
  }
  printPretty(node = this.root, prefix = "", isLast = true) {
    const entries = Array.from(node.children.entries());
    const childCount = entries.length;

    entries.forEach(([char, childNode], index) => {
      const isLastChild = index === childCount - 1;

      console.log(
        prefix +
          (isLast ? "└── " : "├── ") +
          char +
          (childNode.isEndOfWord ? " *" : "")
      );

      // const newPrefix = prefix + (isLast ? "    " : "│   ");
      const newPrefix = prefix + (isLastChild ? "    " : "│   ");

      this.printPretty(childNode, newPrefix, isLastChild);
    });
  }
}
const tries = new Trie();

tries.insert("car");
tries.insert("card");
tries.insert("cat");

console.log(tries.contains("cat"));
// tries.insert("pick");
// tries.insert("picky");
// tries.insert("pickle");
// tries.insert("picture");
// tries.insert("picnic");

// for (let trie in new TrieNode().children.keys()) {
//   console.log(trie);
// }

// console.log(tries);
tries.printPretty();
