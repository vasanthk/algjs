/**
 * Binary Tree traversal
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

/**
 *   ListNode
 *
 */

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
    var queue = new Array();
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