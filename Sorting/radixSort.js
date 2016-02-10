/**
 * Radix Sort
 *
 * https://github.com/kellybhoward/radix_sort_Javascript/blob/master/radix_sort.js
 */

function radixSort(array) {
  var count = 0;
  var sorted = false;
  while (!sorted) {
    var map = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []}; //bucket to collect numbers
    var size = array.length;
    for (var i = 0; i < size; i++) {
      var word = array[i].toString().split(""); //make 'word' array of individual numbers
      if (word.length <= count) {
        map[0].push(array[i]); //if decimal place is 0
      } else {
        map[word[(word.length) - (1) - count]].push(array[i]);
      }

    }
    var collector = [];
    for (var index = 0; index <= 9; index++) {
      for (var valueI = 0; valueI < map[index].length; valueI++) {
        collector.push(map[index][valueI]);
      }
    }
    array = collector;
    if (map[0].length == array.length) {
      sorted = true;
    }
    count++;
  }
  return array;
}
var sampleArray = [4, 87, 21, 922, 45, 621, 900, 39, 2000];
console.time('radix');
console.log(radixSort(sampleArray));
console.timeEnd('radix');