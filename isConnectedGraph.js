/**
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 *
 * Hint: Use BFS or DFS
 *
 * @Reference:
 * https://github.com/snatesan/problems/blob/master/lib/isconnectedgraph.js
 * https://github.com/garronmichael/toyProbs/blob/master/routeBtwnTwoNodes.js
 * http://www.geeksforgeeks.org/find-if-there-is-a-path-between-two-vertices-in-a-given-graph/
 */

// SOLUTION 1
// Using Queues
function isConnectedGraph(node1, node2) {
  var queue = [];
  var adjacents;
  var adjNode;
  var node;

  queue.push(node1);

  // BFS
  while (queue.length) {
    node = queue.shift();
    if (node.visited) {
      continue;
    }

    node.visited = true;
    if (node == node2) {
      return true;
    } else {
      adjacents = node.adjacents;

      for (var i = 0; i < adjacents.length; i++) {
        adjNode = adjacents[i];
        if (!adjNode.visited) {
          queue.push(adjNode);
        }
      }
    }
  }

  return false
}

// Node constructor
function Node(value) {
  this.value = value;
  this.adjacents = []
}
