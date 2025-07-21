class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
    this.height = 1;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }
  /* 
  In AVL rotation diagrams:
      z = The unbalanced node (the one with balance factor > 1 or < -1)
      y = The child of z in the direction that caused the imbalance
      x = The grandchild (the node that was inserted and caused the imbalance)
            z
           /
          y
         /
        x
  */
  // LL
  // rightRotate(z) {
  //   console.log("Rotate right on node", z.value);

  //   const y = z.left;
  //   const T2 = y.right;

  //   y.right = z;
  //   z.left = T2;

  //   z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
  //   y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

  //   return y;
  // }
  rotateLeft(node = this.root) {
    let newRoot = node.right;

    this.root.right = newRoot.left;
    newRoot.left = node;

    setHeight(node);
    setHeight(newRoot);

    return newRoot;
  }
  rotateRight(node = this.root) {
    let newRoot = node.left;

    this.root.left = newRoot.left;
    newRoot.right = node;

    setHeight(node);
    setHeight(newRoot);

    return newRoot;
  }
  setHeight(node = this.root) {
    return (node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right)));
  }
  insert(value) {
    this.root = this._insert(this.root, value);
  }
  _insert(node, value) {
    if (node === null) {
      return new AVLNode(value);
    }
    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return this._balance(node);
    // return node;
  }

  _balance(node) {
    const balance = this.getBalance(node);

    if (balance > 1) {
      if (this.getBalance(node.left) < 0) {
        console.log("Left-Right case on:", node.left.value);
        node.left = this.rotateLeft(node.left);
        // Perform Left-Right rotation
        console.log("Right rotation on:", node.value);
        return this.rotateRight(node);
      }
    } else if (balance < -1) {
      if (this.getBalance(node.right) > 0) {
        console.log("Right-Left case on:", node.right.value);
        node.right = this.rotateRight(node.right);
        // Perform Right-Left rotation
        console.log("Left rotation on:", node.value);
        return this.rotateLeft(node);
      }

      return node;
    }

    // if (balance > 1 && this.getBalance(node.left) >= 0) {
    //   console.log("Left-Left case on:", node.value);
    //   this.rightRotate(node);
    // }

    return node;
  }
  getHeight(node = this.root) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  getBalance(node = this.root) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
  isLeftHeavy() {
    return this.getBalance() > 1;
  }
  isRightHeavy() {
    return this.getBalance() < -1;
  }
  printTree(node = this.root, indent = "") {
    if (node !== null) {
      this.printTree(node.right, indent + "   ");
      console.log(indent + node.value);
      this.printTree(node.left, indent + "   ");
    }
  }
}

const avltree = new AVLTree();
/* 
 Right Heavy: 10
                 20
                    30
 Left Heavy: 30
          20
        30
*/

avltree.insert(30);
avltree.insert(20);
avltree.insert(10);

// avltree.insert(20);
// avltree.insert(10);
// avltree.insert(30);
// avltree.insert(40);
// avltree.insert(50);

// avltree.insert(50);
// avltree.printTree();
console.log(JSON.stringify(avltree, null, 2));
// console.log(avltree);

console.log(avltree.getBalance());
console.log(avltree.getHeight());
