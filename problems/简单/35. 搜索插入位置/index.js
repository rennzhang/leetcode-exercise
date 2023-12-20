/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = parseInt((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } 
  }

    console.log(l, r);
    return l
};

searchInsert([4, 6, 8, 12, 15], 7);
