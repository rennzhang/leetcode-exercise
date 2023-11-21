class Solution:
    def maxChunksToSorted(self, arr) -> int:
        stack = []
        max_val = 0
        for c in arr:

            while(len(stack) > 0 and c < stack[-1]):
                k = stack.pop()
                max_val = max(max_val,k)

            stack.append(max(c,max_val))
        return len(stack)


obj = Solution()
# res=obj.maxChunksToSorted([2,1,3,2,4,6,7])
res=obj.maxChunksToSorted([5,1,1,8,1,6,5,9,7,8])
print(res)
# obj.maxChunksToSorted([2,1,3,4,4])