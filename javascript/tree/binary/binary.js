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
  // traversePreOrder() {
  //   traversePreOrder(this.root);
  // }

  traversePreOrder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.traversePreOrder(node.left);
    this.traversePreOrder(node.right);
  }

  traverseInOrder(node = this.root) {
    if (!node) return;
    this.traverseInOrder(node.left);
    console.log(node.value);
    this.traverseInOrder(node.right);
  }
  traversePostOrder(node = this.root) {
    if (!node) return;
    this.traversePostOrder(node.left);
    this.traversePostOrder(node.right);
    console.log(node.value);
  }

  height(node = this.root) {
    // if (node.left === null && node.right === null) return 0;
    // if (this.isLeaf(node)) return 0;
    if (node === null) return -1;

    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  isLeaf(node = this.root) {
    if (node === null) return false;
    return node.left === null && node.right === null;
  }
  min(node = this.root) {
    // if (node.left === null && node.right === null) return 0;
    if (this.isLeaf(node)) {
      return node.value;
    }
    // if (node === null) return -1;

    let left = this.min(node.left);
    let right = this.min(node.right);

    // console.log("Left: ", left);
    // console.log("Right: ", right);

    return Math.min(Math.min(left, right), node.value);
  }
  // min(node = this.root) {
  //   if (node.left === null) return node.value;
  //   return this.min(node.left);
  // }
  equals(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;

    if (root1.value !== root2.value) return false;

    return (
      this.equals(root1.left, root2.left) &&
      this.equals(root1.right, root2.right)
    );
  }

  validateBST(node = this.root, left, right) {
    if (node.left === null && node.right === null) return 0;

    const leftChild = this.validateBST(node, node.left, node.right);
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

const tree = new BinaryTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

console.log(binary.equals(binary.root, tree.root));

// binary.insert(100);
// binary.insert(5);
// binary.insert(3);

// binary.traversePreOrder(); // 7, 4, 1, 6, 9, 8, 10
// binary.traverseInOrder(); //  1, 4, 6, 7, 8, 9, 10
// binary.traversePostOrder(); //   1, 6, 4, 8, 10, 9, 7

// height & depth
// console.log(binary.min());

// console.log(binary.find(7))

// console.log(binary);

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
