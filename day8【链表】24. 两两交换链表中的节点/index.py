# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional


class ListNode:
    def __init__(self, x=None):
        self.val = x
        self.next = None

def createLinkList(arr):
    # 首部虚拟节点
    head = ListNode()
    pre_el = None
    for el in arr:
        cur = ListNode(el)
        if pre_el is None:
            head.next = cur
        else:
            pre_el.next = cur
        pre_el = cur
    return head.next


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
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

            

_head = createLinkList([1,2])
        
obj = Solution()
res=obj.swapPairs(_head)
print(res)