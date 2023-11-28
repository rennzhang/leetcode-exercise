from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return f"TreeNode(val={self.val}, left={self.left}, right={self.right})"


treeRoot = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(treeRoot)


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


obj = Solution()
obj.maxDepth(treeRoot)
