/**
 * Build a Binary Search tree
 *
 * @Reference:
 * https://productbuilder.wordpress.com/2013/09/06/building-a-binary-search-tree-in-javascript/
 * http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript
 * http://www.thecodingdelight.com/binary-search-tree-implementation-javascript/
 */

function Node(value) {
  this.value = value;
}

Node.prototype.setLeft = function (left) {
  this.left = left;
};

Node.prototype.setRight = function (right) {
  this.right = right;
};

// tree is the root node of the tree.
// node is the new node to add.
function insertNode(tree, node) {
  if (tree) {
    if (tree.value < node.value) {
      if (tree.right) {
        insertNode(tree.right, node)
      } else {
        tree.setRight(node);
      }
    } else {
      if (tree.left) {
        insertNode(tree.left, node);
      } else {
        tree.setLeft(node);
      }
    }
  } else {
    tree = node;
  }
  return tree;
}

// http://stackoverflow.com/a/27812601/1672655
function removeNode(tree, node) {
  if (tree) {
    if (node.value < tree.value) {
      removeNode(tree.left, node);
    } else if (node.value > tree.value) {
      removeNode(tree.right, node);
    } else if (node.value === tree.value) {
      if (node.left && node.right) {
        var minNode = findMinVal(node.right);

        node.value = minNode.value;
        node.right = removeNode(node.right, minNode);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  } else {
    return false;
  }
}

function findMinVal(node) {
  return node.left ? findMinVal(node.left) : node;
}

function printTreeAsc(root) {
  // Same as in order traversal
  var currNode = root;
  if (currNode.left) {
    printTreeAsc(currNode.left);
  }

  console.log(currNode.value);

  if (currNode.right) {
    printTreeAsc(currNode.right);
  }
}


// CREATE BST
var arr = [1, 3, 7, 2, 23, 6];
var tree;

arr.forEach(function (num) {
  tree = insertNode(tree, new Node(num));
});

printTreeAsc(tree);

//  OUTPUT
//
//  1
//  2
//  3
//  6
//  7
//  23
