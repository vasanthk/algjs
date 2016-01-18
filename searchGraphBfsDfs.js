/**
 * Search BST using BFS or DFS
 *
 * The graph is represented using an Adjaceny Matrix
 * Note: For an undirected graph, the adjacency matrix is symmetric. For a directed graph, the adjacency matrix need not be symmetric.
 * https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs
 *
 * @Reference:
 * https://mgechev.github.io/javascript-algorithms/module-graphs_searching_bfs.html
 * https://mgechev.github.io/javascript-algorithms/module-graphs_searching_dfs.html
 */

(function (exports) {
  var bfs = (function () {

    // Build path from targetNode all the way up to the root.
    function _buildPath(parents, targetNode) {
      var result = [];
      result.unshift(targetNode);

      while (parents[targetNode] !== null) {
        targetNode = parents[targetNode];
        result.unshift(targetNode);
      }
      return result;
    }

    // BFS searching algorithm
    return function (graph, startNode, targetNode) {
      var parents = [];
      var queue = [];
      var visited = [];
      var current;

      queue.push(startNode);

      parents[startNode] = null;
      visited[startNode] = true;

      while (queue.length) {
        current = queue.shift();
        if (current === targetNode) {
          return _buildPath(parents, targetNode);
        }
        for (var i = 0; i < graph.length; i++) {
          if (i !== current && graph[current][i] && !visited[i]) {
            parents[i] = current;
            visited[i] = true;
            queue.push(i);
          }
        }
      }
      return null;
    };

  })();

  exports.bfs = bfs;
})((typeof window === 'undefined') ? module.exports : window);

// OUTPUT
//
// var graph = [[1, 1, 0, 0, 1, 0],
//  [1, 0, 1, 0, 1, 0],
//  [0, 1, 0, 1, 0, 0],
//  [0, 0, 1, 0, 1, 1],
//  [1, 1, 0, 1, 0, 0],
//  [0, 0, 0, 1, 0, 0]];
// console.log(bfs(graph, 1, 5)); // [1, 2, 3, 5]
