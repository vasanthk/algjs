/**
 * Implement a function to check if a binary tree is balanced.
 * For the purpose of this question a balanced tree is defined to be a tree such that
 * heights of the two subtrees of any node never differ by more than one
 *
 * Time Complexity: O(n)
 * Space Complexity: O(log n)
 */

function checkHeight(root) {
  if (root === null) {
    return 0; // height of 0
  }

  // Check if left is balanced
  var leftHeight = checkHeight(root.left);
  if (leftHeight === -1) {
    return -1;  // not balanced.
  }

  // Check if right is balanced
  var rightHeight = checkHeight(root.right);
  if (rightHeight === -1) {
    return -1;  // not balanced.
  }

  // Check if current node is balanced.
  var heightDiff = Math.abs(leftHeight - rightHeight);
  if (heightDiff > 1) {
    return -1; // balanced;
  } else {
    // return height.
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(root) {
  return (checkHeight(root) !== -1);
}


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
var grandchild5 = new Node(9);
var grandchild6 = new Node(11);
root.left = child1;
root.right = child2;
child1.left = grandchild1;
child1.right = grandchild2;
child2.left = grandchild3;
child2.right = grandchild4;
grandchild4.right = grandchild5;
grandchild5.right = grandchild6;

// OUTPUT:
// console.log(isBalanced(root));
//
// false
