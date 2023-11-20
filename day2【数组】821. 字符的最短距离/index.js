// https://leetcode-cn.com/problems/shortest-distance-to-a-character
// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

// 示例 1:

// 输入: S = "loveleetcode", C = 'e'
// 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// 说明:

// - 字符串 S 的长度范围为 [1, 10000]。
// - C 是一个单字符，且保证是字符串 S 里的字符。
// - S 和 C 中的所有字母均为小写字母。

/* 
思路：
  从尾部开始遍历，如果找到 C 记录坐标，继续遍历记录每个字母和当前记录 C 的距离，知道找到下一个 C ，重新记录 C ，
  并且从当前位置正向遍历进行距离比较，直到距离相等
*/
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let res = [];
  for (let idx = 0; idx <= s.length - 1; idx++) {
    let pre = res[idx - 1] + 1 || s.length - idx;
    res[idx] = s[idx] === c ? 0 : pre;
  }

  for (let idx = res.length - 1; idx >= 0; idx--) {
    res[idx] = Math.min(res[idx], res[idx + 1] + 1) || res[idx];
  }

  return res;
};
console.log(shortestToChar("aaba", "b"));
