/**
 * Binary Search
 *
 * Doing a binary search on a sorted array is, on average, more efficient than a linear search (traditional indexOf() implementation)
 * because the maximum number of comparisons is kept small. A binary search has an efficiency of O(log n) while a linear search has an efficiency of O(n).
 *
 * @Reference:
 * https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/
 */

function binarySearch(items, value) {
  var startIndex = 0,
    stopIndex = items.length - 1,
    middle = Math.floor((startIndex + stopIndex) / 2);
    // Alternative to Math.floor((a + b) / 2);
    // Right shift bitwise operator
    // middle = ((startIndex + stopIndex) >> 1);
    // or
    // middle = ~~((startIndex + stopIndex) / 2);

  while (items[middle] != value && startIndex < stopIndex) {

    //adjust search area
    if (value < items[middle]) {
      stopIndex = middle - 1;
    } else if (value > items[middle]) {
      startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  //make sure it's the right value
  return (items[middle] != value) ? -1 : middle;
}