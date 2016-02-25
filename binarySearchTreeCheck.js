/**
 * Check if given binary tree is a BST
 *
 * @Reference:
 * https://github.com/jokomo/moretoyproblems/blob/master/binary-search-tree-check.js
 */

function checkBST(bst) {
  //max is the constraint on the left side of the tree
  function checkTree(bst, min, max) {
    if (!bst) {
      return true;
    }

    if (bst.value > max || bst.value <= min) {
      return false;
    }

    if (!checkTree(bst.left, min, bst.value) || !checkTree(bst.right, bst.value, max)) {
      return false;
    }
    return true;
  }

  return checkTree(bst, Number.MIN_VALUE, Number.MAX_VALUE);
}