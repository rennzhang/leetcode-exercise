/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createLinkedList = (arr, n) => {
  let dummy = new ListNode(); // 首部虚拟节点
  let cur = dummy; // 当前节点

  let intersect = null;
  let last = null;

  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);

    cur = cur.next;
    if (i == n) {
      intersect = cur;
      console.log("相交点为：", intersect);
    }
    if (i == arr.length - 1) last = cur;
  }

  last.next = intersect;

  return dummy.next;
};

// const head1 = createLinkedList([4, 1, 8, 4, 5], 1);
// const head1 = createLinkedList([-1, -7, 7, -4, 19, 6, -9, -5, -2, -5], 9);
const head1 = createLinkedList(
  [
    -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20,
    14, 14, 2, 13, -24, 21, 23, -21, 5,
  ],
  24
);
// console.log(head1.next.next.next.next.next.next.next.next.next.next.next.next);
// // 方案一：哈希大法
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var detectCycle = function (head) {
//   let map = new Set()

//   let node = head
//   while (node) {
//     if(map.has(node)) return node
//     map.add(next)
//     node = node.next
//   }
//   return null
// };

// detectCycle(head1)

// 方案二：双指针
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return null;
    slow = slow.next;
    fast = fast.next.next;
  }
  let a = head;
  let b = slow.next;

  if (slow == slow.next) return slow;

  
  //  按照相交链表处理
  while (a !== b) {
    a = a.next;
    b = b.next;
    if (a == slow) a = fast;
    if (b == slow) b = head;
  }

  return a;
};

console.log(detectCycle(head1));
