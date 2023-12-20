/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let res = [];
  nums.forEach((c, i) => (map[c] = i));

  for (let i = 0; i < nums.length; i++) {
    let minus = map[target - nums[i]];
    if (minus && minus !== i) {
      res = [i, minus];
      break;
    }
  }
  return res;
};
twoSum([1, 3, 4, 2], 6);
