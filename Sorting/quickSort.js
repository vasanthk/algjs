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
  var pivot = left;
  var pivot_value = arr[pivot];

  while (left < right) {
    while (arr[left] <= pivot_value) {
      left++;
    }
    while (arr[right] > pivot_value) {
      right--;
    }
    if (left < right) {
      swap(arr, left, right);
    }
  }

  arr[pivot] = arr[right];
  arr[right] = pivot_value;

  return right;
}


function swap(arr, left, right) {
  var temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

x = [1, 2, 3, 8, 3, 4, 6, 8, 1, 1, 1, 2];
quickSort(x);