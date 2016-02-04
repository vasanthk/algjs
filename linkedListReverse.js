/**
 * Reverse a linked list
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  var root = null;
  var prev = null;
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < args.length; i++) {
    var num = args[i];

    if (root === null) {
      root = new ListNode(num);
      prev = root;
      continue;
    }

    prev.next = new ListNode(num);
    prev = prev.next;
  }

  return root;
}

function reverseLinkedList(head) {
  if (head === null) return null;

  var node = head;
  while (node.next !== null) {
    var newHead = node.next;
    node.next = newHead.next;

    newHead.next = head;
    head = newHead;
  }

  return head;
}

// OUTPUT
// var input = LinkedList(1, 2, 6, 3, 4, 5, 6);
// var output = reverseLinkedList(input);
//
// 6, 5, 4, 3, 6, 2, 1
