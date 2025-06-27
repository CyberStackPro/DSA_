class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
    // else {
    //   let current = this.root;
    //   const searchTree = (current) => {
    //     if (value < current.value && current.left) {
    //       searchTree(current.left);
    //     } else if (value < current.value) {
    //       current.left = node;
    //     } else if (value > current.value && current.right) {
    //       searchTree(current.right);
    //     } else if (value > current.value) {
    //       current.right = node;
    //     }
    //   };
    //   return searchTree(current);
    // }
  }

  find(value) {
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else return true;
    }
    return false;
  }
}
const binary = new BinaryTree();
binary.insert(7);
binary.insert(4);
binary.insert(9);
binary.insert(1);
binary.insert(6);
binary.insert(8);
binary.insert(10);

console.log(binary.find(7));

console.log(binary);

// let root = new TreeNode("R");
// let nodeA = new TreeNode("A");
// let nodeB = new TreeNode("B");
// let nodeC = new TreeNode("C");
// let nodeD = new TreeNode("D");
// let nodeE = new TreeNode("E");
// let nodeF = new TreeNode("F");
// let nodeG = new TreeNode("G");

// root.left = nodeA;
// root.right = nodeB;

// nodeA.left = nodeC;
// nodeA.right = nodeD;

// nodeB.left = nodeE;
// nodeB.right = nodeF;

// nodeF.left = nodeG;

// console.log("root.right.left.data", root);

// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.tail = null;
//       this.head = null;
//       this.size = 0;
//     }
