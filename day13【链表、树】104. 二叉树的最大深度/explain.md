## 题目
[104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/)

## 思路
一碰到递归大脑就像浆糊，这道题看第一眼觉得很简单，但其实不然，代码慢慢调出来通过后，才慢慢理清楚思路的。

简单来说就是两个变量，记录每次递归的根节点的左树和右树的最大层数，也就是如果当前根节点有左子节点，那么 `maxL + 1`，右子节点同理`maxR + 1`，如果没有子节点了就停止了，但另一边还在继续，这样每次递归返回`max(maxL, maxR)`即可



## 代码
```py
class Solution:
    def maxDepth(self, root: Optional[TreeNode], _max = 1) -> int:
        if not root:
            return 0
        maxL = _max
        maxR = _max

        if root.left:
            maxL = self.maxDepth(root.left, maxL + 1)

        if root.right:
            maxR = self.maxDepth(root.right, maxR + 1)

        return max(maxL, maxR)
```


## 复杂度分析

- 时间复杂度：`O(N)`

> 使用递归，次数为二叉树的节点数量

- 空间复杂度：`O(N)`


