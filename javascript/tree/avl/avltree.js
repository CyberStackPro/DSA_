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
  /* 
    | Variable | Meaning                         | Value                         |
    | -------- | ------------------------------- | ----------------------------- |
    | `z`      | the unbalanced node             | 10                            |
    | `y`      | z.left (child of z)             | 20                            |
    | `T3`     | y.right (will be subtree moved) | `null` (right of 20 is empty) |
  */
  rotateLeft(z) {
    const y = z.right; // y = 20
    const T2 = y.left; // T2 = null

    y.left = z; // y.left = null now it become 10,  20.left = 10

    z.right = T2; // 10.right = null

    this.setHeight(z);
    this.setHeight(y);

    return y;

    // let newRoot = node.right;

    // node.right = newRoot.left;
    // newRoot.left = node;

    // this.setHeight(node);
    // this.setHeight(newRoot);

    // return newRoot;
  }

  /* 
    | Variable | Meaning                         | Value                         |
    | -------- | ------------------------------- | ----------------------------- |
    | `z`      | the unbalanced node             | 30                            |
    | `y`      | z.left (child of z)             | 20                            |
    | `T3`     | y.right (will be subtree moved) | `null` (right of 20 is empty) |
  */
  rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    // 20.right = 30
    y.right = z;

    // 30.left = null (because T3 = null)
    z.left = T3;

    /* 
    30->20->10

        30       20
      20      10  30
    10

    */

    this.setHeight(z);
    this.setHeight(y);

    return y;
    // let newRoot = node.left;

    // node.left = newRoot.left;
    // newRoot.right = node;

    // this.setHeight(node);
    // this.setHeight(newRoot);

    // return newRoot;
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

    node = this._balance(node);
    // return (node = this._balance(node));
    return node;
  }

  _balance(node) {
    // const balance = this.getBalance(node);

    if (this.isLeftHeavy(node) && this.getBalance(node.left) < 0) {
      console.log("LR case: ", node.left.value);
      console.log("LR case on: ", node.value);

      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (this.isRightHeavy(node) && this.getBalance(node.right) > 0) {
      console.log("RL case: ", node.right.value);
      console.log("RL case on: ", node.value);

      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }
    if (this.isLeftHeavy(node)) {
      console.log("LL case on:", node.value);
      return this.rotateRight(node);
    }

    if (this.isRightHeavy(node)) {
      console.log("RR case on: ", node.value);
      return this.rotateLeft(node);
    }

    return node;

    // if (this.isLeftHeavy(node) && this.getBalance(node.left) < 0) {
    //   // if () {
    //   console.log("Left Balance: ", this.getBalance(node.left));

    //   console.log("Left-Right case on:", node.left.value);
    //   node.left = this.rotateLeft(node.left);
    //   // Perform Left-Right rotation
    //   console.log("Right rotation on:", node.value);
    //   return this.rotateRight(node);
    //   // }
    // } else if (this.isRightHeavy(node) && this.getBalance(node.right) >= 0) {
    //   // if () {
    //   console.log("Right-Left case on:", node.right.value);
    //   node.right = this.rotateRight(node.right);
    //   // Perform Right-Left rotation
    //   console.log("Left rotation on:", node.value);
    //   return this.rotateLeft(node);
    //   // }
    // }

    // if (balance > 1 && this.getBalance(node.left) >= 0) {
    //   console.log("Left-Left case on:", node.value);
    //   this.rightRotate(node);
    // }
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
  isLeftHeavy(node) {
    return this.getBalance(node) > 1;
  }
  isRightHeavy(node) {
    return this.getBalance(node) < -1;
  }
  printTree(node = this.root, indent = "") {
    if (node !== null) {
      this.printTree(node.right, indent + "   ");
      console.log(indent + node.value);
      this.printTree(node.left, indent + "   ");
    }
  }
  printPretty(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right) {
      this.printPretty(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left) {
      this.printPretty(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

// let avl = new AVLTree();
// [30, 20, 10].forEach(v => avl.insert(v)); // LL
// [10, 20, 30].forEach(v => avl.insert(v)); // RR
// [30, 10, 20].forEach(v => avl.insert(v)); // LR
// [10, 30, 20].forEach(v => avl.insert(v)); // RL

// AVL Tree Insertion Test Cases with ASCII Trees for Reference

/*
===========================
🌲 Right-Right (RR) Rotation
===========================
Insert:
    avltree.insert(20);
    avltree.insert(10);
    avltree.insert(30);
    avltree.insert(40);
    avltree.insert(50);

Before:
       20
     /    \
   10      30
             \
             40
               \
               50

After RR on 30:
       20
     /    \
   10      40
         /    \
       30      50
*/

/*
===========================
🌲 Left-Left (LL) Rotation
===========================
Insert:
    avltree.insert(50);
    avltree.insert(40);
    avltree.insert(30);

Before:
       50
      /
    40
   /
 30

After LL on 50:
      40
    /    \
  30      50
*/

/*
===========================
🌲 Left-Right (LR) Rotation
===========================
Insert:
    avltree.insert(30);
    avltree.insert(10);
    avltree.insert(20);

Before:
      30
     /
   10
     \
     20

After LR:
Step 1: Left Rotate on 10 → becomes:
      30
     /
   20
   /
 10

Step 2: Right Rotate on 30 → Final:
      20
    /    \
  10      30
*/

/*
===========================
🌲 Right-Left (RL) Rotation
===========================
Insert:
    avltree.insert(10);
    avltree.insert(30);
    avltree.insert(20);

Before:
      10
        \
         30
        /
      20

After RL:
Step 1: Right Rotate on 30 → becomes:
      10
        \
         20
            \
             30

Step 2: Left Rotate on 10 → Final:
      20
    /    \
  10      30
*/

// To run a test, uncomment the set of inserts:
const avltree = new AVLTree();

// Example for Left-Right case:
// avltree.insert(30);
// avltree.insert(10);
// avltree.insert(20);

// Example for Right-Left case:
// avltree.insert(10);
// avltree.insert(30);
// avltree.insert(20);

// Example for Right-Right case:
// avltree.insert(20);
// avltree.insert(10);
// avltree.insert(30);
// avltree.insert(40);
// avltree.insert(50);

// Example for Left-Left case:
// avltree.insert(50);
// avltree.insert(40);
// avltree.insert(30);

// Print the tree
avltree.printPretty();
