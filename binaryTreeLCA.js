/**
 * Devise an algorithm to find the lowest common ancestor of a binary search tree, given two nodes.
 * You may assume that both nodes are members of the tree.
 *
 * Time Complexity: O(log n)
 *
 * @Reference:
 * https://github.com/malachaifrazier/JavaScript-Interview-Questions/blob/master/trees/008.js
 * http://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/
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

// Find lowest common ancestor
function findLowestCommonAncestor(root, value1, value2) {
  var current = root;
  var value = null;

  while (current != null) {
    value = current.value;

    if (value > value1 && value > value2) {
      current = current.left;
    } else if (value < value1 && value < value2) {
      current = current.right;
    } else {
      return current;
    }
  }
  return null;
}


//  OUTPUT
//  console.log( findLowestCommonAncestor(root, 121, 190) );
//  console.log( findLowestCommonAncestor(root, 28 , 190) );
//  console.log( findLowestCommonAncestor(root, 28 , 79 ) );
//  console.log( findLowestCommonAncestor(root, 62 , 141) );