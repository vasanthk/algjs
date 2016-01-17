/**
 * Linked List implementation on JavaScript.
 *
 * @Reference:
 * http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript
 */

var Node = function (value) {
  this.value = value;
  this.next = null;
  return this;
};

var LinkedList = function (node) {
  this.head = node;
  return this;
};

LinkedList.prototype.insertEnd = function (newNode, currentNode) {
  var node = currentNode || this.head;

  if (node.next !== null) {
    return this.insertEnd(newNode, node.next);
  } else {
    node.next = newNode;
  }
};

LinkedList.prototype.insertBeginning = function (newNode) {
  newNode.next = this.head;
  this.head = newNode;
};

LinkedList.prototype.search = function (searchValue, currentNode) {
  var node = currentNode || this.head;
  if (node.value === searchValue) {
    console.log('Found');
    return true;
  } else if (node.next !== null) {
    return this.search(searchValue, node.next);
  }
  console.log('Not found');
  return false;
};

LinkedList.prototype.remove = function (deleteValue, currentNode, parentNode) {
  var node = currentNode || this.head;
  if (node.value === deleteValue) {
    if (node.next !== null) {
      parentNode.next = node.next;
    } else {
      parentNode.next = null;
    }
  } else if (node.next !== null) {
    return this.remove(deleteValue, node.next, node);
  }
};

LinkedList.prototype.size = function (currentNode) {
  var node = currentNode || this.head;
  if (node.next == null) {
    return 1;
  } else {
    return 1 + this.size(node.next);
  }
};


(function () {
  // LinkedList Example
  var linkedList = new LinkedList(new Node("oldHead"));
  linkedList.insertEnd(new Node(2));
  linkedList.insertEnd(new Node("cat"));
  linkedList.insertEnd(new Node("dog"));
  linkedList.insertEnd(new Node(100));

  linkedList.search("cat");
  console.log(linkedList.size());
  linkedList.remove("cat");
  console.log(linkedList.size());
  linkedList.search("cat");
  console.log("current head: " + linkedList.head.value);
  linkedList.insertBeginning(new Node("testBeginningInsert"));
  console.log("current head: " + linkedList.head.value);
  console.log(linkedList.size());
})();