## 题目
[24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/description/)

## 思路
思路挺简单，但一直调不对，指针修改有点绕

- 定义一个虚拟头结点，作为前置节点和最后 return 方便使用

- while循环，定义`node1` 为当前的节点，`node2` 为下一个节点

    - 把 `node1.next` 指向 `node2` 的下一个节点

    - 把 `node2.next` 指向 `node1`

    - 把 `pre.next` 指向 `node2`, 如此便完成了一次交换

- 注意题目描述为`两两交换`，因此直接把 `pre` 设置为上面操作完成后面的节点，相当于直接跳过了后面奇数节点的交换操作


## 代码
```python
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:  
        if not head or not head.next: return head
        dump = ListNode(-1)
        dump.next = head
        pre = dump

        while head and head.next:
            node1 = head
            node2 = head.next

            pre.next = node2
            node1.next = node2.next
            node2.next = node1

            pre = node1
            head = head.next
        
        return dump.next
```
## 复杂度分析

- 时间复杂度：`O(N)`
> while 遍历，最大长度是链表的长度，即 N

- 空间复杂度：`O(1)`
> 未开辟新的空间，只对链表进行操作，并且声明常数个变量，总体为 O(1)


