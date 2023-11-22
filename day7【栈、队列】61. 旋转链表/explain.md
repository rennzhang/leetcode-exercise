## 题目
[61. 旋转链表](https://leetcode.cn/problems/rotate-list/)

## 思路
整体思路是用`while`找到链表最后一个节点，同时将所有的节点按照next顺序记录到数组中去

然后应该算出一个最小的操作数，即`k % 链表的节点个数`，余数就是需要操作的次数，其他的都是多余操作

可以按照算出的操作次数倒序遍历`record`逐个进行链表节点修改，但其实可以合并为一次操作：

- 即从`record`数组中倒数 `k+1` 一直到数组中最后一个“这一串”链表就是需要操作的结点
- 直接把这一串拼到原链表最前方即可，也就是只需要修改一次即可


## 代码
```python
class Solution:
    def rotateRight(self, head, k: int) -> ListNode:
        if not k or not head or not head.next: return head
        # 用数组记录所有的指针
        record = [head]

        endNode = head
        while endNode.next:
            endNode = endNode.next
            record.append(endNode)

        # 去掉多余的操作
        k = k % len(record)
        if not k: return head 

        # 从数组记录中取出需要旋转的串，直接拼到最前端
        pre = record[-(k+1)]
        newHead = pre.next
        record[-1].next = head
        pre.next = None
        
        return newHead
```
## 复杂度分析

- 时间复杂度：`O(N)`
> while 遍历，最大长度是链表的长度，即 N

- 空间复杂度：`O(N)`
> 开辟的新数组长度同样为链表的长度，所以也是N


