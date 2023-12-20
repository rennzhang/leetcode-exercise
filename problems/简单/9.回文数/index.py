class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0: return False
        middle = len(str(x) /2)
        print(middle)
        
obj = Solution()
print(obj.isPalindrome(121))