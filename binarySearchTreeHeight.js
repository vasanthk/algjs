/**
 * Calculating max height of a BST
 */

// BST node bare bones
function Node(value) {
  this.value = value;
}

Node.prototype.setLeft = function (left) {
  this.left = left;
};

Node.prototype.setRight = function (right) {
  this.right = right;
};

// Calc Max Height
function calcHeight(node) {
  if (node) {
    return 1 + Math.max(calcHeight(node.left), calcHeight(node.right));
  } else {
    return 0;
  }
}