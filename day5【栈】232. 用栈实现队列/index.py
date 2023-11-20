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



# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()