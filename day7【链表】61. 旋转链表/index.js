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
// const n1 = new ListNode(1)
// const n2 = new ListNode(2)
// const n3 = new ListNode(3)
// const n4 = new ListNode(4)
// const n5 = new ListNode(5)
// n1.next = n2
// n2.next = n3
// n3.next = n4
// n4.next = n5

// console.log(n3);

const createLinkList = (arr) => {
  // 首部虚拟节点
  let head = new ListNode();
  let preEl = null;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let cur = new ListNode(el);
    if (!preEl) {
      head.next = cur;
    } else {
      preEl.next = cur;
    }
    preEl = cur;
  }
  return head;
};
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
// var rotateRight = function (head, k) {
//   if (!k || !head || !head.next) return head;

//   let headNode = new ListNode(-1, head);
//   let endNode = head;
//   let record = [null];

//   while (endNode.next) {
//     record.push(endNode);
//     endNode = endNode.next;
//   }

//   k %= record.length;
//   if (!k) return headNode.next;
//   k--;

//   record[record.length - 1].next = null;
//   endNode.next = headNode.next;
//   headNode.next = endNode;

//   if (k > 0) {
//     let target = record[record.length - k];
//     record[record.length - 1].next = headNode.next;

//     headNode.next = target;

//     if (record[record.length - k - 1]) {
//       record[record.length - k - 1].next = null;
//     }
//   }
//   return headNode.next;
// };

// 优化版
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!k || !head || !head.next) return head;

  // let headNode = new ListNode(-1, head);
  let endNode = head;
  let record = [head];

  while (endNode.next) {
      endNode = endNode.next;
      record.push(endNode);
  }

  if (!(k %= record.length)) return head;

  let preNode = record[record.length - k - 1];
  let headNode = preNode.next
  record[record.length - 1].next = head;
  preNode.next = null

  return headNode
};

// console.log(rotateRight(createLinkList([1, 2]).next, 2));
console.log(rotateRight(createLinkList([1, 2, 3, 4, 5]).next, 2));
// rotateRight(createLinkList([0, 1, 2]).next, 4);
// rotateRight(createLinkList([1, 2, 3]).next, 200000);
