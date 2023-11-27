## 题目
[146. LRU 缓存机制](https://leetcode.cn/problems/lru-cache/)

## 思路
题目有要求时间复杂度必须`O(1)`，因此不能使用遍历的方式；

首先看了下 `LRU缓存` 的概念，用链表实现简单来说就是，链表一头是最新的，另一头是最旧的。因此在`get` 或者 `put` 时应该把当前放到最新的那一头，而当超出的时候从最旧的那一头移除一个节点即可，同时需要更新哈希表；

所以至少需要一个虚拟头结点和虚拟尾节点，可以直接获取到 `使用频率最高或最低的节点`，那么尾节点需要一个 `prev` 指针，并且 `put` 的节点可能在链表的任何位置，在不借助其他结构存储节点位置的情况（如用数组），那么每个节点都需要有一个 `prev` 指针，用来修改前后节点的指针，至此，能确定这道题需要用到`双向链表`。

但细节比较多，尤其是指针的操作，很容易出错，最终代码还是参考了题解写出来的。



## 代码
```js
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

```
## 复杂度分析

- 时间复杂度：`O(1)`

- 空间复杂度：`O(N)`


