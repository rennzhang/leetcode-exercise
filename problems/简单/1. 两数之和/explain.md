## 题目
[1. 两数之和](https://leetcode.cn/problems/two-sum/description/)

## 思路
遍历第一遍，用 map 记录，key 是num，value 是 index

遍历第二遍，去判断每一个数字和 target 的差值是否存在于 map 中，如果存在，返回index 即可


## 代码
```py
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        Map = {}
        res = []
        for i in range(len(nums)):
            Map[nums[i]] = i

        for i in range(len(nums)):
            minus = Map.get(target - nums[i])
            if minus and minus != i:
                res = [i, minus]
                break

        return res


obj = Solution()
# obj.twoSum([2, 3, 1, 4, 5, 6], 6)
obj.twoSum([2,5,5,11], 10)

```


## 复杂度分析

- 时间复杂度：`O(2N)`

- 空间复杂度：`O(N)`


