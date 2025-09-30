class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return
    }
    this.insertNode(this.root, newNode)
  }

  insertNode(node, newNode) {
    // if (newNode.value < node.value) {
    //   if (!node.left) {
    //     node.left = newNode
    //   } else {
    //     this.insertNode(node.left, newNode)
    //   }
    // } else {
    //   if (!node.right) {
    //     node.right = newNode

    //   } else {
    //     this.insertNode(node.right, newNode)
    //   }
    // }

    if (!node) return newNode

    if (newNode.value < node.value) {
      node.left = this.insertNode(node.left, newNode)
    } else {
      node.right = this.insertNode(node.right, newNode)
    }

    return node
  }

  search(value) {
    return this.searchNode(this.root, value)
  }

  searchNode(node, value) {
    if (node === null) return false

    if (node.value === value) return true

    if (value < node.value) {
      return this.searchNode(node.left, value)
    }
    return this.searchNode(node.right, value)
  }

  remove(value) {

    this.removeNode(this.root, value)

  }

  removeNode(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.removeNode(node.left, value)
      return node
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node;
      }

      let aux = this.findMinNode(node.right)
      node.value = aux.value

      node.right = this.removeNode(node.right, aux.value)
      return node
    }
  }

  findMinNode(node) {
    if (node.left === null) return node
    else return this.findMinNode(node.left)
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(JSON.stringify(bst))

console.log("Search 7:", bst.search(7));   // true
console.log("Search 12:", bst.search(12));  // false

bst.remove(5);
console.log(bst.search(5));   // false