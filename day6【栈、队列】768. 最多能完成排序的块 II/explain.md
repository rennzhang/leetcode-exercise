## 题目
[768. 最多能完成排序的块 II](https://leetcode.cn/problems/max-chunks-to-make-sorted-ii/description/)

## 思路
利用递增[单调栈](https://lucifer.ren/blog/2020/11/03/monotone-stack/)实现：

遍历数组，如果栈顶元素大于当前元素，则一直 pop 到小于为止（不包括等于，等于可以分一个块）

另外有一个关键点(`append操作`)卡住了，比如 `[2, 3, 1, 4, 2, 5, 6, 8]`


当：`元素等于4` 时
栈: `[1]`

当：`元素等于2` 时
栈: `[1,4]`

如果继续按照单调栈操作，则会得到栈`[1, 2, 4]`，显然不合理，因为前面有一个3被弹出了，所以应该记录下栈中的最大值，并且入栈元素应该是一个最小块中的最大值，确保不会影响后面的块，后面的块应该保持最小值`>=`上一个块的最大值


> 确实很难，题目看半天才理解，需要先了解下前置知识，单调栈

## 代码
```python
class Solution:
    def maxChunksToSorted(self, arr) -> int:
        stack = []
        max_val = 0
        for c in arr:
            while(len(stack) > 0 and c < stack[-1]):
                k = stack.pop()
                # 取栈中的最大值
                max_val = max(max_val,k)

            stack.append(max(c,max_val))
        return len(stack)
```
## 复杂度分析

- 时间复杂度：`O(N)`
> 遍历数组，并且对栈进行操作，最换的情况是所有元素都入栈一次，所以总体时间复杂度为 O(N)

- 空间复杂度：`O(N)`
> 栈的空间不会超过数组的最大长度，再加一个`max_val`变量，总体为 N


