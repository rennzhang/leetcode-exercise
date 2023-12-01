## 题目
[104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/)

## 思路

### 方法一

利用递归加上 DFS 的思路，即每次递归对比传入的两个树节点是否相同，相同则继续递归，直到找到不相同的返回 `False`, 否则返回 `True`

### 方法二

利用栈来做对比，栈的初始值是 `[p, q]`，如果栈不为空则取出两个节点（分别是两个树的同一位置的节点）进行比较：
- 如果都为 `null`，跳过进行下一次
- 对比他们的值是否相同
  - 不同则`return False`
  - 相同则按组想栈中添加节点，即 `append[树1的左子节点，树2的左子节点] append[树1的右子节点，树2的右子节点]`
- 进入下一次对比

这个方法利用栈，可以把空间复杂度降为 1




## 代码
```py
# 方法一：递归 + DFS
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        return bool(
            p
            and q
            and p.val == q.val
            and self.isSameTree(p.left, q.left)
            and self.isSameTree(p.right, q.right)
        )
```


```py
# 方法二：利用栈实现
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True

        stack = [[p, q]]

        while len(stack):
            [n1, n2] = stack.pop()

            if not n1 and not n2:
                continue
            if not n1 or not n2 or n1.val != n2.val:
                return False

            stack.append([n1.left, n2.left])
            stack.append([n1.right, n2.right])

        return not stack
```

## 复杂度分析
- 时间复杂度：`O(N)`

> 以上两种方法的时间复杂度都是 N，递归或者遍历，最坏的情况是遍历所有节点

- 空间复杂度：`O(h)` 

> h介于 logN 和 N之间，如果树是一个平衡二叉树，最好的情况是 logN，当树是 完全偏斜的树 时是 N






