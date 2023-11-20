## 题目
[821. 字符的最短距离](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)

## 思路

### 1. “暴力解法”

作为一个算法小白，会自然而然带入平时对写业务的理解来实现，即：
- 求 num 数组实际数字总和，`[1,2,0,0]` => `1200`
- 总和加 `k`, `1200 + k`
- 转为字符串遍历，在放到新的数组中

> 但学算法应该从数据结构的特性出发

### 2. 倒序-逐个相加-进位

通过倒序遍历数组，从个位开始相加 `k`，并记录进位
-  `k` 加当前位大于 9 时，保留个位
- 处理进位，减去个位除以10（十进制）
- 处理最后位，即最终剩余进位 加`num[0]` 大于9，需要再次向前进位的情况

### 代码
```js
var addToArrayForm = function (num, k) {
  let carry = k;
  let res = [];

  for (let idx = num.length - 1; idx >= 0; idx--) {
    let cur = num[idx];
    // 向 res 数组中 push 相加后所得的个位数
    res.push((cur + carry) % 10);
    // 处理进位，减去个位除以10
    carry = Math.floor((cur + carry) / 10);
  }

  while (carry > 0) {
    res.push(carry % 10);
    carry = Math.floor(carry / 10);
  }

  return res.reverse();
};

```

### 复杂度分析

- 时间复杂度：`O(n + log(k-n))`,
- 时间复杂度：`O(n + (k - n))`

> 对于时间复杂度：遍历 `num`需要 `O(n)` 时间 ，处理多余进位的情况为`O(log(k-n))`

> 对于空间复杂度：新开了一个数组，其长度是 `n + (k - n)`, `k - n` 是最后处理剩余进位的情况

