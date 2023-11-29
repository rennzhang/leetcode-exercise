from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# treeRoot1 =  TreeNode(
#   3,
#    TreeNode(9),
#    TreeNode(20,  TreeNode(15),  TreeNode(7))
# );

# treeRoot2 =  TreeNode(
#   3,
#    TreeNode(9),
#    TreeNode(20,  TreeNode(15),  TreeNode(7))
# );

treeRoot1 = TreeNode(
    1,
    TreeNode(2),
    TreeNode(3),
)

treeRoot2 = TreeNode(
    1,
    TreeNode(2),
    TreeNode(3),
)


# 方法一：递归 + DFS
# class Solution:
#     def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
#         if not p and not q:
#             return True
#         return bool(
#             p
#             and q
#             and p.val == q.val
#             and self.isSameTree(p.left, q.left)
#             and self.isSameTree(p.right, q.right)
#         )


# 方法二：利用栈实现，降低空间复杂度
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


obj = Solution()
print(obj.isSameTree(treeRoot1, treeRoot2))
