from typing import List
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
            if i+1 >= 0 and i+1 < len(s):
                res[i] = min(res[i], res[i+1]+1)
        return res
    
result = Solution().shortestToChar("aaba", "b")
print(result)