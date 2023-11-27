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

def createLinkList(arr,n):
    bump = ListNode()
    intersect = None
    next = bump
    for c in arr:
        next = ListNode(c)
        next.next = next
        if c==n: intersect = next
    next.next = intersect
    return bump.next

head1 =  createLinkList(
  [
    -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20,
    14, 14, 2, 13, -24, 21, 23, -21, 5,
  ],
  21
);
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast=head.next
        slow = head
        while fast != slow:
            if not next or not fast.next: return None
            fast = fast.next.next
            slow = slow.next
            if slow == slow.next: return None
        
        a = head
        b = slow.next
        
        while a!=b:
            a = a.next
            b= b.next
            if not a: a = slow.next
            if not b: b = head
        
        return a 
        
        
                

        
obj = Solution()
res=obj.detectCycle(head1)
print(res)