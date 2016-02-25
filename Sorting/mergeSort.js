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
 * http://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort
 * https://github.com/chihungyu1116/interview_sols_javascript/blob/master/algorithm/sort_merge_sort.js
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = parseInt(arr.length / 2);

  // Error Zone: Make sure to slice and send the sub arrays.
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
    }
  }
  // Remaining part needs to be added to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
