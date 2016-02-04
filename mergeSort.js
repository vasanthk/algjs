/**
 * Merge sort an array
 *
 * Time Complexity:
 * Worst case: O(nlogn)
 * Average case: O(nlogn)
 * Best case: O(nlogn)
 *
 * Space Complexity (Worst): O(n)
 *
 * @Reference:
 * https://github.com/chihungyu1116/interview_sols_javascript/blob/master/algorithm/sort_merge_sort.js
 */

function merge_sort(arr) {
  console.log('Sorted Array: ', merge_sort_helper(arr));
}

function merge_sort_helper(arr) {
  var middle = parseInt(arr.length / 2);

  if (arr.length < 2) return arr;

  var left = merge_sort_helper(arr.slice(0, middle));
  var right = merge_sort_helper(arr.slice(middle));

  return merge(left, right);
}

function merge(a, b) {
  var arr = [];
  var a_index = 0, b_index = 0;
  while (a_index < a.length && b_index < b.length) {
    if (a[a_index] <= b[b_index]) {
      arr.push(a[a_index]);
      a_index++;
    } else {
      arr.push(b[b_index]);
      b_index++;
    }
  }

  arr = arr.concat(a.slice(a_index)).concat(b.slice(b_index));

  return arr;
}
