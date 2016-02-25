/**
 * Build a Binary Search tree
 *
 * @Reference:
 * https://productbuilder.wordpress.com/2013/09/06/building-a-binary-search-tree-in-javascript/
 * http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript
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
