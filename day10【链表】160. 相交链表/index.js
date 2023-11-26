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


const head1 = createLinkList([4,1,8,4,5])
const head2 = createLinkList([5, 6, 1, 8, 4, 5])

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

  
  let map = new Map()

  let nextA = headA
  while (nextA) {
    map.set(nextA,true)
    nextA = nextA.next
  }
  
  let nextB = headB
  while (nextB) {
    if (map.get(nextB)) return nextB
    nextB = nextB.next
  }
  return null
};

getIntersectionNode(head1,head2)