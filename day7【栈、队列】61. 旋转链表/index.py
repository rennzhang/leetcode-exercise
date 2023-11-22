# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
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
    return head

class Solution:
    def rotateRight(self, head, k: int) -> ListNode:
        if not k or not head or not head.next: return head
        record = [head]
        endNode = head
        while endNode.next:
            endNode = endNode.next
            record.append(endNode)

        k = k % len(record)
        if not k: return head 

        pre = record[-(k+1)]
        newHead = pre.next
        record[-1].next = head
        pre.next = None
        
        return newHead
        
obj = Solution()
# res=obj.maxChunksToSorted([2,1,3,2,4,6,7])
res=obj.rotateRight(createLinkList([1, 2, 3, 4, 5]).next, 2)
print(res)