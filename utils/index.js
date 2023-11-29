/**
 * 创建一个链表节点
 * @param val
 * @param next
 * @param prev
 */
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 创建一个双向链表节点
 * @param val
 * @param next
 * @param prev
 */
export function DobuleListNode(val, next, prev) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
}

/**
 * 传入数组，生成链表
 * @param {number[]} arr 数组
 * @returns {ListNode}
 */
export function createLinkedList(arr) {
  let dummy = new ListNode(); // 首部虚拟节点
  let cur = dummy; // 当前节点
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return dummy.next;
}

/**
 * 传入数组，生成环形链表
 * @param {number[]} arr 数组
 * @param {number} start 环形起点 index
 * @param {number} end 环形终点 index，不传就是链表最后一个节点
 * @returns {ListNode}
 */
export const createLoopLinkedList = (arr, start, end = null) => {
  let dummy = new ListNode(); // 首部虚拟节点
  let cur = dummy; // 当前节点

  let startNode = null;
  let endNode = null;
  let lastNode = null;

  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);

    cur = cur.next;
    if (i == start) {
      startNode = cur;
    }
    if (i == end) {
      endNode = cur;
    }
    if (i == arr.length - 1) lastNode = cur;
  }

  if (!endNode) endNode = lastNode;
  endNode.next = startNode;

  return dummy.next;
};

/**
 * 创建一个二叉树节点
 * @param val
 * @param left
 * @param right
 */
export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
