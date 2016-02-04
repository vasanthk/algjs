/**
 * Build a Binary Search tree
 *
 * @Reference:
 * https://productbuilder.wordpress.com/2013/09/06/building-a-binary-search-tree-in-javascript/
 * http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript
 */

function Node(name, value) {
  this.name = name;
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

// TESTING THE BST
function setup() {
  var nodeA = new Node('a', 5);
  var nodeB = new Node('b', 12);
  var nodeC = new Node('c', 10);
  var nodeD = new Node('d', 15);
  var nodeE = new Node('e', 20);
  var nodeF = new Node('f', 25);
  var nodeG = new Node('g', 8);
  var nodeH = new Node('h', 3);

  var tree = insertNode(tree, nodeA);
  tree = insertNode(tree, nodeB);
  tree = insertNode(tree, nodeC);
  tree = insertNode(tree, nodeD);
  tree = insertNode(tree, nodeE);
  tree = insertNode(tree, nodeF);
  tree = insertNode(tree, nodeG);
  tree = insertNode(tree, nodeH);
}

function printTreeAsc(root) {
  var currNode = root;
  if (currNode.left) {
    printTreeAsc(currNode.left);
  }

  console.log(currNode.value);

  if (currNode.right) {
    printTreeAsc(currNode.right);
  }
}

//  OUTPUT
//
//  3
//  5
//  8
//  10
//  12
//  15
//  20
//  25

// How tall is my BST
function calcHeight(node) {
  if (node) {
    return 1 + Math.max(calcHeight(node.left), calcHeight(node.right));
  } else {
    return 0;
  }
}