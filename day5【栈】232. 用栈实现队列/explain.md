## 题目
[232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

## 思路
按照题目所说，使用两个栈来操作，我的思路是`队列每次进行 push 操作`时，同时对 `栈A 进行入栈操作`，直到队列使用`pop\peek` 方法时，操作 A 栈全部弹出并依次入栈 B，此时栈顶就是队列首部。

队列的`push`操作依旧全部同时入栈 A，直到栈 B 为空并且队列使用`pop\peek`时，重复以上步骤。


## 代码
```python
class MyQueue:

    def __init__(self):
        self.stackA = []
        self.stackB = []


    def push(self, x: int) -> None:
        self.stackA.append(x)


    def pop(self) -> int:
        self.transferEl()
        return self.stackB.pop()


    def peek(self) -> int:
        self.transferEl()
        return self.stackB[-1]


    def empty(self) -> bool:
        return not self.stackA and not self.stackB
    
    def transferEl(self) -> None:
        if not self.stackB:
            while self.stackA:
                self.stackB.append(self.stackA.pop())

```
## 复杂度分析

- 时间复杂度：`O(N)`,

- 空间复杂度：`O(N)`


