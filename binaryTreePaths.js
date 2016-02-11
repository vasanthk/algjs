/**
 * Given a binary tree, print out all of its root-to-leaf paths one per line.
 *
 * @Reference:
 * https://github.com/fulltilt/JSAlgs/blob/master/BinarySearchTree.js#L590
 * http://www.geeksforgeeks.org/given-a-binary-tree-print-out-all-of-its-root-to-leaf-paths-one-per-line/
 */

// Typical Binary tree node.
function Node(left, right, value) {
  this.left = left;
  this.right = right;
  this.value = value;
}

// Sample tree structure
var root = new Node(
  new Node(
    new Node(null, null, 28),
    new Node(null, null, 79),
    62
  ),
  new Node(
    new Node(
      new Node(null, null, 121),
      null,
      130),
    new Node(null, null, 190),
    141
  ),
  110
);

function printAllPaths(node, path) {
  if (node === null) {
    return null;
  }

  path.push(node.value);
  var left = this.printAllPaths(node.left, path);
  var right = this.printAllPaths(node.right, path);

  if (left === null && right === null) {
    console.log(path);
  }
  // this part ensures that
  // 1) When the leaf node has been added to the paths -- pop() the current leaf node.
  // 2) When subtree below this node has already been added to paths -- pop() the current node.
  path.pop();
}

// printAllPaths(root, [])
//
// [110, 62, 28]
// [110, 62, 79]
// [110, 141, 130, 121]
// [110, 141, 190]