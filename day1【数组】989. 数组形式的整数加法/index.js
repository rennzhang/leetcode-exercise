// 示例 1：

const { log } = require("console");

// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
// 示例 2：

// 输入：A = [2,7,4], K = 181
// 输出：[4,5,5]
// 解释：274 + 181 = 455
// 示例 3：

// 输入：A = [2,1,5], K = 806
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021
// 示例 4：

// 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
// 输出：[1,0,0,0,0,0,0,0,0,0,0]
// 解释：9999999999 + 1 = 10000000000

// /**
//  * @param {number[]} num
//  * @param {number} k
//  * @return {number[]}
//  */
// var addToArrayForm = function (num, k) {
//   let len = num.length;
//   let num_sum = 0;
//   for (let idx = len - 1; idx >= 0; idx--) {
//     let j = len - idx - 1;
//     let cur = num[j];
//     num_sum += cur * 10 ** idx;
//   }

//   let res = [];
//   let sumStr = String(num_sum + k);
//   for (const n of sumStr) {
//     res.push(Number(n));
//   }
//   return res
// };

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let carry = k;
  let res = [];

  for (let idx = num.length - 1; idx >= 0; idx--) {
    let cur = num[idx];
    res.push((cur + carry) % 10);
    carry = Math.floor((cur + carry) / 10);
  }

  while (carry > 0) {
    res.push(carry % 10);
    carry = Math.floor(carry / 10);
  }

  return res.reverse();
};
console.log(addToArrayForm([8, 7, 1], 9994));
