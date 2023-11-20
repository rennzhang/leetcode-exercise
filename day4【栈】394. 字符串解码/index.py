class Solution:
    def decodeString(self, s: str) -> str:
        stack =[]
        for i in s:
            # 遇到闭合括号时处理重复字符操作
            if i == ']':
                repeatStr = ''
                repeatCount = ''

                while stack and stack[-1] != '[':
                        repeatStr = stack.pop()+repeatStr
                stack.pop()
                while stack and stack[-1].isnumeric():
                    repeatCount = stack.pop() + repeatCount 
                
                stack.append(repeatStr * int(repeatCount))
            else:
                stack.append(i)
        return "".join(stack)

obj = Solution()
print(obj.decodeString("3[a2[c]]"))