/**
 * Merge k sorted linked lists and return it as one sorted list.
 *
 * @Reference:
 * https://github.com/lanocturne/es6/blob/master/js/mergeKSorted.js
 */
var mergeKLists = function (lists) {
  return lists.reduce(mergeSorted, []);
};

var lists = [
  [1, 4, 5, 8, 9],
  [3, 4, 4, 6],
  [0, 2, 8]
];

function mergeSorted(merged, curr) {
  var answer = [],
    i = 0,
    j = 0;

  while (i < merged.length && j < curr.length) {
    if (merged[i] < curr[j]) {
      answer.push(merged[i]);
      i++;
    } else {
      answer.push(curr[j]);
      j++;
    }
  }

  return answer.concat(merged.slice(i)).concat(curr.slice(j));
}

console.log(mergeKLists(lists));