// depth-first search (DFS)

class TrieNode {
  constructor(values = "") {
    this.values = values;
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
  getChildren() {
    return Array.from(this.children.values());
    // return [...this.children.values()];
  }
  removeChild(ch) {
    this.children.delete(ch);
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
  traverse(node = this.root) {
    // // Pre-order traversal
    // console.log(node.values);

    // for (let child of node.getChildren()) this.traverse(child);

    // Post-order traversal
    for (let child of node.getChildren()) this.traverse(child);

    console.log(node.values);
  }
  delete(word) {
    if (word === null) return;
    this.#delete(this.root, word, 0);
  }
  #delete(currentNode, word, index) {
    if (index === word.length) {
      if (!currentNode.isEndOfWord) {
        return false;
      }

      currentNode.isEndOfWord = false;

      return currentNode.children.size === 0;
    }

    const ch = word[index];
    const childNode = currentNode.getChild(ch);

    if (!childNode) {
      return false;
    }

    const shouldDeleteChild = this.#delete(childNode, word, index + 1);

    if (shouldDeleteChild) {
      currentNode.removeChild(ch);

      return currentNode.children.size === 0 && !currentNode.isEndOfWord;
    }
    return false;
  }
  autocomplete(prefix) {
    let startingNode = this.findPrefixNode(prefix);
    console.log("Starting Node: ", startingNode);

    let resultArray = [];
    if (startingNode === null) {
      return [];
    }

    this.#collectWords(startingNode, prefix, resultArray);

    return resultArray;
  }
  #collectWords(node, currentWord, resultArray) {
    if (node.isEndOfWord === true) {
      resultArray.push(currentWord);
    }
    for (let childNode of node.getChildren()) {
      this.#collectWords(
        childNode,
        currentWord + childNode.values,
        resultArray
      );
    }
  }
  findPrefixNode(prefix) {
    let currentNode = this.root;

    for (let ch of prefix) {
      if (!currentNode.hasChild(ch)) {
        return null;
      }
      currentNode = currentNode.getChild(ch);
    }
    return currentNode;
  }

  contains(word) {
    if (word === null) return false;

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
// const tries = new Trie();

module.exports = { Trie };

// tries.insert("car");
// tries.insert("cat");
// tries.insert("card");
// tries.insert("careful");
// tries.insert("egg");
// tries.insert("example");

// console.log(tries.contains("cat"));

// tries.insert("pick");
// tries.insert("picky");
// tries.insert("pickle");
// tries.insert("picture");
// tries.insert("picnic");

// for (let trie in new TrieNode().children.keys()) {
//   console.log(trie);
// }

// console.log(tries);
// tries.traverse();

// tries.delete("car");

// tries.printPretty();
// console.log(tries.findPrefixNode("car"));
// console.log(tries.autocomplete("c"));
