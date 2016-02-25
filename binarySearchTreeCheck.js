/**
 * Check if given binary tree is a BST
 *
 * @Reference:
 * https://github.com/jokomo/moretoyproblems/blob/master/binary-search-tree-check.js
 */

function checkBST(root) {
  //max is the constraint on the left side of the tree
  function checkTree(node, min, max) {
    if (!node) {
      return true;
    }

    if (node.value > max || node.value <= min) {
      return false;
    }

    if (!checkTree(node.left, min, node.value) || !checkTree(node.right, node.value, max)) {
      return false;
    }
    return true;
  }

  return checkTree(root, Number.MIN_VALUE, Number.MAX_VALUE);
}