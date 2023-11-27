## 题目
[142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)

## 思路
第一种是借助哈希实现

第二种是双指针

- 快指针走两步，慢指针走一步，如果有环一定会相遇，不相遇则说明没有环

- 记录相遇点，作为“断开点”，把他当做相交链表来处理即可



## 代码
```py

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return None
        fast=head.next
        slow = head
        while fast != slow:
            if not fast or not fast.next: return None
            fast = fast.next.next
            slow = slow.next
            if slow == slow.next: return slow
        
        a = head
        b = slow.next
        
        while a!=b:
            a = a.next
            b= b.next
            if not a: a = slow.next
            if not b: b = head
        
        return a 
```
## 复杂度分析

- 时间复杂度：`O(N)`

- 空间复杂度：`O(1)`


