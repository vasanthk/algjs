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

// SOLUTION 2
// Using recursion

var nodes = {}; // Contains all nodes in the graph

// Constructor for adding nodes to the graph
var Node = function (value, edges) {
  nodes[value] = {
    value: value,
    edges: edges
  };
  return nodes[value];
};

// a and b are of type Node
// Find out if there is a route from a to b
var getRoute = function (a, b) {
  var hasRoute = false;
  var visited = [];

  function recurse(node) {
    visited.push(node);
    if (node.value === b.value) {
      hasRoute = true;
      return;
    }

    if (node.edges) {
      for (var i = 0; i < node.edges.length; i++) {
        if (visited.indexOf(node.edges[i].value) === -1) {
          recurse(node.edges[i]);
        }
      }
    }
  }

  recurse(a);
  return hasRoute;
};


// ES6 version of Solution 2
var nodes = {};
var Node = (value, edges) => nodes[value] = {value: value, edges: edges};
var getRoute = function (a, b, found = []) {
  return a.edges == null ? false : a.edges.some(n => {
    if (found.indexOf(n) > -1) return false;
    found.push(n);
    return n == b || getRoute(n, b, found);
  });
};