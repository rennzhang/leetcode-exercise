class CustomStack:

    def __init__(self, maxSize: int):
        self.stack = []
        self.topPos = 0
        self.inc = []
        self.maxSize = maxSize



    def push(self, x: int) -> None:
        if self.topPos < self.maxSize:
            self.stack.append(x)
            self.inc.append(0)
            self.topPos += 1


    def pop(self) -> int:
        if self.topPos == 0: return -1
        self.topPos -= 1
        if self.topPos >=1: 
            self.inc[-2] += self.inc[-1]
        return self.stack.pop() + self.inc.pop()
        
        


    def increment(self, k: int, val: int) -> None:
        if self.inc:
            self.inc[min(k, self.topPos) - 1] += val



# Your CustomStack object will be instantiated and called as such:
obj = CustomStack(4)
obj.push(3)
obj.push(3)
obj.push(4)
param_2 = obj.pop()
obj.increment(4,100)
param_3 = obj.pop()
print(obj)
