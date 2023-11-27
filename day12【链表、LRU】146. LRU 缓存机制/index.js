/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next, prev) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
}

const createLinkedList = (arr, n) => {
  let dummy = new ListNode(); // 首部虚拟节点
  let cur = dummy; // 当前节点
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return dummy.next;
};
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.head = new ListNode();
  this.last = new ListNode();
  this.head.next = this.last;
  this.last.prev = this.head;
  this.useSpace = 0
  this.map = {};
};

LRUCache.prototype.isFull = function () {
  return this.useSpace == this.capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.map[key];
  if (node) {
    this.appendHead(this.removeNode(node));
    return node.val;
  }
  return -1;
};
LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;

  return node;
};

LRUCache.prototype.appendHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next = node;
  node.next.prev = node;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.map) {
    let node = this.map[key]
    this.appendHead(this.removeNode(node));
    this.map[key] = node

    node.val = value;
  } else {
    if (this.isFull()) {
      const node = this.last.prev;
      delete this.map[node.key];
      const newNode = this.removeNode(node)
      newNode.val = value
      newNode.key = key
      this.appendHead(newNode);
      this.map[key] = newNode
    } else {
      let node = new ListNode(value);
      node.key = key
      this.appendHead(node);
      this.map[key] = node
      this.useSpace ++
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
(obj, obj.get(1));
obj.put(3, 3);
console.log(obj);
(obj, obj.get(2));
obj.put(4,4);
(obj,obj.get(1))



