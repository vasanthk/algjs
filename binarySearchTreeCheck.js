/**
 * Check if given binary tree is a BST
 *
 */

var Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

var root = new Node(5);
var child1 = new Node(2);
var child2 = new Node(7);
var grandchild1 = new Node(1);
var grandchild2 = new Node(3);
var grandchild3 = new Node(6);
var grandchild4 = new Node(8);
root.left = child1;
root.right = child2;
child1.left = grandchild1;
child1.right = grandchild2;
child2.left = grandchild3;
child2.right = grandchild4;

// Is the tree rooted at x a BST with all values strictly between min and max
// (if min or max is null, treat as empty constraint)
var isBinarySearchTree = function (node, min, max) {
  if (node === null) {
    return true;
  }

  if (min !== null && node.value < min) {
    return false;
  }

  if (max !== null && node.value > max) {
    return false;
  }

  return isBinarySearchTree(node.left, min, node.value) &&
    isBinarySearchTree(node.right, node.value, max);
};

// console.log('Is it a Binary search tree?');
// isBinarySearchTree(root, 1, 8);
// true