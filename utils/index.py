import pprint
from collections import deque
class ListNode:
    """
    创建一个链表节点
    """
    def __init__(self, x=None):
        self.val = x
        self.next = None
    
    # def __repr__(self):
    #     return f"ListNode {{ 'val': {self.val}, 'next': {self.next} }}"

class DobuleListNode:
    '''
    创建一个双向链表节点
    '''
    def __init(self, x=None):
        self.val = x
        self.pref = None
        self.next = None

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    # def __repr__(self, level=0):
    #     indent = "  " * level
    #     result = f"{indent}TreeNode {{\n"
    #     result += f"{indent}  'val': {self.val},\n"
    #     result += f"{indent}  'left': {repr(self.left, level + 1) if self.left else None},\n"
    #     result += f"{indent}  'right': {repr(self.right, level + 1) if self.right else None}\n"
    #     result += f"{indent}}}"
    #     return result

def print_tree(node, level=0):
    if node is not None:
        print_tree(node.right, level=level+1)
        print(' ' * 4 * level + '->', node.val)
        print_tree(node.left, level=level+1)

def createLinkList(arr):
    '''
    传入数组，生成链表
    '''
    dump = ListNode()
    cur = dump
    for c in arr:
        cur.next = ListNode(c)
        cur = cur.next
    
    return dump.next

def createLoopLinkedList(arr, start, end=None):
    dump = ListNode()
    cur = dump

    startNode = None
    endNode = None
    lastNode = None

    for i,el in enumerate(arr):
        cur.next = ListNode(arr[i])
        cur = cur.next

        if i == start: startNode = cur 
        if i == end: endNode = cur 
        if i == len(arr) - 1: lastNode = cur;
    
    if not endNode: endNode = lastNode
    endNode.next = startNode
    return dump.next


def find_cycle_start(head):
    slow = fast = head
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    if fast is None or fast.next is None:
        return None
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow

def linked_list_to_string(head):
    current = head
    string = ""
    visited = set()
    cycle_start = find_cycle_start(head)
    while current is not None:
        if cycle_start is not None and current == cycle_start:
            string += "[" + str(current.val) + "] -> "
        elif current.next is None and cycle_start is not None and cycle_start.next == head:
            string += "[" + str(current.val) + "] -> [" + str(cycle_start.val) + "]"
        else:
            string += str(current.val) + " -> "
        if current in visited:
            string += "..."
            break
        visited.add(current)
        current = current.next
    if not cycle_start: string += "None"
    else: string += "[[__Incycle__]]"
    return string

    

    

