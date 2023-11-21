/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let stack = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    while (el < stack[stack.length - 1]) {
      let k = stack.pop();
      if (k >= max) {
        max = k;
      }
    }

    stack.push(Math.max(max, el));

  }
  return stack.length;
};
// console.log(maxChunksToSorted([2,1,3,4,4]));
console.log(maxChunksToSorted([2, 3, 1, 4, 2, 5, 6, 8]));
// console.log(maxChunksToSorted([5,4,3,2,1]));
// console.log(maxChunksToSorted([1, 0, 1, 3, 2]));
// console.log(maxChunksToSorted([0, 3, 0, 3, 2]));
// [2,3,4,5,6,8]
