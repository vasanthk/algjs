/**
 * Merge k sorted linked lists and return it as one sorted list.
 *
 * @Reference:
 * https://github.com/lanocturne/es6/blob/master/js/mergeKSorted.js
 */
var mergeKLists = function (lists) {
  return lists.reduce(mergeSorted);
};

var lists = [
  [1, 4, 5, 8, 9],
  [3, 4, 4, 6],
  [0, 2, 8]
];

function mergeSorted(a, b) {

  var answer = [],
    i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      answer.push(a[i]);
      i++;
    } else {
      answer.push(b[j]);
      j++;
    }

  }
  while (i < a.length) {
    answer.push(a[i]);
    i++;

  }
  while (j < b.length) {
    answer.push(b[j]);
    j++;

  }
  return answer;
}

console.log(mergeKLists(lists));