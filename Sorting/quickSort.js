/**
 * Quick sort an array
 *
 * Time Complexity:
 * Worst case: O(n^2)
 * Average case: O(nlogn)
 * Best case: O(nlogn)
 *
 * Space Complexity (Worst): O(nlogn)
 *
 * @Reference:
 * https://github.com/chihungyu1116/interview_sols_javascript/blob/master/algorithm/sort_quick_sort.js
 * http://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort
 *
 * Video:
 * https://www.youtube.com/watch?v=y_G9BkAm6B8
 */

function quickSort(arr) {
  console.log('Sorted Array: ', quickSortHelper(arr, 0, arr.length - 1));
}

function quickSortHelper(arr, left, right) {
  if (left >= right) return;

  var pivot = partition(arr, left, right);

  quickSortHelper(arr, left, pivot - 1);
  quickSortHelper(arr, pivot + 1, right);
  return arr;
}

function partition(arr, left, right) {
  // For a random index pivot
  var pivot = Math.floor(Math.random() * right);
  // We apply Math.random() on `right` index because that is the max range for the current partition.
  var pivotVal = arr[pivot];

  while (left < right) {
    while (arr[left] <= pivotVal) {
      left++;
    }
    while (arr[right] > pivotVal) {
      right--;
    }
    if (left < right) {
      swap(arr, left, right);
    }
  }

  // Move pivot val to the index where right and left converged
  // This is to ensure all leftVals < pivotVal < rightVals
  arr[pivot] = arr[right];
  arr[right] = pivotVal;

  // Return right index (No need to return array since the changes are made in place.)
  // Arrays are passed by reference: http://orizens.com/wp/topics/javascript-arrays-passing-by-reference-or-by-value/
  return right;
}


function swap(arr, left, right) {
  var temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  // Using ES6 destructuring assignment
  // [arr[left], arr[right]] = [arr[right], arr[left]]
}

x = [1, 2, 3, 8, 3, 4, 6, 8, 1, 1, 1, 2];
quickSort(x);