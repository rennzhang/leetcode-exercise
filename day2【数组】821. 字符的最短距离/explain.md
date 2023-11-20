## 题目
[821. 字符的最短距离](https://leetcode.cn/problems/shortest-distance-to-a-character/)

```py
示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
```
## 思路

### 双向遍历

第一次正向遍历，找到 c 后，index 为 0，后续每一个递增 1，直到找到下一个 c，重复上述步骤。

第二次反向遍历，从每个 c 的下一个坐标位判断当前位 是否大于 `上一位+1`，如果大于则替换更小的距离


### 代码
```js
class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        res = [len(s)] * len(s)
        for i in range(0,len(s)):
            pre = res[i - 1] + 1 
            if s[i] == c:
                res[i] = 0
            else:
                res[i] = pre

        for i in range(len(s)-1,-1,-1):
            if 0 <= i+1 < len(s):
                res[i] = min(res[i], res[i+1]+1)
        return res
```

### 复杂度分析

- 时间复杂度：`O(n)`
> for的时间复杂度为 O(n), 两次 for 总体为 O(n)

---

- 时间复杂度：`O(n)`
> 对数组 res 进行操作，长度是 s 的长度，所以为 O(n)

