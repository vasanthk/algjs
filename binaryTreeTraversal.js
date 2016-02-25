/**
 * Binary Tree traversal (Depth first traversal)
 *
 * Preorder
 * <root> <left> <right>
 *
 * Inorder
 * <left> <root> <right>
 *
 * Postorder
 * <left> <right> <root>
 *
 * Time Complexity: O(n)
 * Space Complexity:
 * O(h) --> height or the tree
 * Worst: O(n-1) ~ O(n)
 * Best/Average: O(log n)
 *
 *
 * @Reference:
 * Preorder, Inorder, Postorder: https://www.youtube.com/watch?v=gm8DUJJhmY4
 * http://khan4019.github.io/front-end-Interview-Questions/bst.html
 * http://www.java2s.com/Tutorials/Javascript/Javascript_Data_Structure/0420__Javascript_Binary_Tree.htm
 * http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript
 * https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/
 * https://productbuilder.wordpress.com/2013/09/06/building-a-binary-search-tree-in-javascript/
 * https://gist.github.com/trevmex/821973
 * http://stackoverflow.com/a/31931931/1672655
 */

/**
 * SIMPLE VERSION
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

// pre-order traversal
// visit current node before child nodes
var preOrderTraversal = function (node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
};

console.log('pre order traversal');
preOrderTraversal(root);

// in-order traversal
// visit left branch, then current node, then right branch
var inOrderTraversal = function (node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
};

console.log('in order traversal');
inOrderTraversal(root);

// post-order traversal
// visit current node after child nodes
var postOrderTraversal = function (node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
};

console.log('post order traversal');
postOrderTraversal(root);


// level order traversal
// visit current level nodes before next level
var levelOrderTraversal = function(node) {
  var currNode = node;
  var queue = [];

  while(currNode !== undefined) {
    console.log(currNode.value);
    if(currNode.left) {
      queue.push(currNode.left);
    }

    if(currNode.right) {
      queue.push(currNode.right);
    }

    currNode = queue.shift();
  }
};

console.log('level order traversal');
levelOrderTraversal(root);

/*
 *  DETAILED VERSION
 *
 *  RootedTreeTraversal
 *   - Preorder Traversal
 *   - Postorder Traversal
 *   - Inorder Traversal
 *   - Levelorder Traversal
 *
 *  We will have to create a special Linked list to store the values of the rooted tree as shown in the figure below
 *
 *  Linked List fields:
 *  Head - pointing to the first node of the list (The root of the tree)
 *  Size - Total number of nodes in the tree
 *
 *  Representation:
 *   - Every node will have reference to the parent Node except the Root node which does not have any parent.
 *   - Every node will point to its left child except the leaf nodes where the first child pointer will be null;
 *   - Every node (except the root node) will point to its  first sibling.
 *
 * @Reference:
 * https://gist.github.com/vasanthk/cfb91cd9d7aa40748c05
 */

TRVSL = {};

TRVSL.TreeNode = function () {
  this.item = null;
  this.parent = null;
  this.firstChild = null;
  this.nextSibling = null;

  /**
   * Preorder traversal
   *
   *  Recursive method to visit itself before visiting the children
   *  e.g Directory structure
   */
  this.preorder = function () {
    this.visited();
    if (this.firstChild != null) {
      this.firstChild.preorder();
    }
    if (this.nextSibling != null) {
      this.nextSibling.preorder();
    }
  };

  /**
   * Postorder traversal
   *
   *  Recursive method to visit the children before visiting itself
   *  e.g To find the total size of the directory
   */
  this.postorder = function () {
    if (this.firstChild != null) {
      this.firstChild.postorder();
    }
    this.visited();
    if (this.nextSibling != null) {
      this.nextSibling.postorder();
    }
  };

  /**
   * Inorder traversal
   *
   * First child nodes are visited then the parent node and then sibling child node and their parents
   */
  this.inorder = function () {
    if (this.firstChild != null) {
      this.firstChild.inorder();
    }
    if (this.nextSibling != null) {
      this.nextSibling.inorder();
    }
    this.visited();
  };

  /**
   * Level order traversal is done only in binary trees
   * In level order every node on the same level are visited at a time.
   */
  this.levelorder = function () {
    var queue = [];
    queue.push(this);
    while (queue.length > 0) {
      var node = queue.shift();
      console.log("Visited Node: " + node.item);
      if (node.firstChild != null) {
        queue.push(node.firstChild);
        if (node.firstChild.nextSibling != null) {
          queue.push(node.firstChild.nextSibling);
        }
      }
    }
  };

  this.visited = function () {
    console.log("Current Node visited: " + this.item);
  }
};

/**
 * Generate a Rooted tree - Manual
 *
 * Rooted tree node is basically a directory structure
 *
 *  home
 *    users
 *      user1
 *        Desktop
 *      user2
 *      user3
 *    files
 *      file1
 *      file2
 *    languages
 *      Java
 *      JS
 *
 */
TRVSL.TreeList = function () {
  this.root = null;
  this.size = null;

  this.createBasicTree = function () {
    var home = createNode("Home", null, null, null);
    this.root = home;

    var users = createNode("Users", home, null, null);
    home.firstChild = users;

    var user1 = createNode("User1", users, null, null);
    users.firstChild = user1;

    var user2 = createNode("User2", users, null, null);
    user1.nextSibling = user2;

    var user3 = createNode("User3", users, null, null);
    user2.nextSibling = user3;

    var files = createNode("Files", home, null, null);
    users.nextSibling = files;

    var file1 = createNode("File1", files, null, null);
    files.firstChild = file1;

    var desktop = createNode("Desktop", user1, null, null);
    user1.firstChild = desktop;

    var file2 = createNode("File2", files, null, null);
    file1.nextSibling = file2;

    var languages = createNode("Languages", home, null, null);
    files.nextSibling = languages;

    var javaL = createNode("Java", languages, null, null);
    languages.firstChild = javaL;

    var jsL = createNode("JS", languages, null, null);
    javaL.nextSibling = jsL;
  };

  var createNode = function (item, parent, firstChild, nextSibling) {
    var node = new TRVSL.TreeNode();
    node.item = item;
    node.parent = parent;
    node.firstChild = firstChild;
    node.nextSibling = nextSibling;
    return node;
  };

  this.getRoot = function () {
    return this.root;
  }
};

var tree = new TRVSL.TreeList();
tree.createBasicTree();
console.log("Tree:");
var root = tree.getRoot();
console.log("Preorder Traversal");
root.preorder();
console.log("Postorder Traversal");
root.postorder();
console.log("Inorder Traversal");
root.inorder();
console.log("Level Order");
root.levelorder();

/**
 *  OUTPUT
 * Preorder Traversal
 * Current Node visited: Home
 * Current Node visited: Users
 * Current Node visited: User1
 * Current Node visited: Desktop
 * Current Node visited: User2
 * Current Node visited: User3
 * Current Node visited: Files
 * Current Node visited: File1
 * Current Node visited: File2
 * Current Node visited: Languages
 * Current Node visited: Java
 * Current Node visited: JS
 *
 * Postorder Traversal
 * Current Node visited: Desktop
 * Current Node visited: User1
 * Current Node visited: User2
 * Current Node visited: User3
 * Current Node visited: Users
 * Current Node visited: File1
 * Current Node visited: File2
 * Current Node visited: Files
 * Current Node visited: Java
 * Current Node visited: JS
 * Current Node visited: Languages
 * Current Node visited: Home
 *
 * Inorder Traversal
 * Current Node visited: Desktop
 * Current Node visited: User3
 * Current Node visited: User2
 * Current Node visited: User1
 * Current Node visited: File2
 * Current Node visited: File1
 * Current Node visited: JS
 * Current Node visited: Java
 * Current Node visited: Languages
 * Current Node visited: Files
 * Current Node visited: Users
 * Current Node visited: Home
 *
 * Level Order
 * Visited Node: Home
 * Visited Node: Users
 * Visited Node: Files
 * Visited Node: User1
 * Visited Node: User2
 * Visited Node: File1
 * Visited Node: File2
 * Visited Node: Desktop
 *
 **/