## 题目
[61. 旋转链表](https://leetcode.cn/problems/rotate-list/)

## 思路
借助哈希实现


## 代码
```js
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
```
## 复杂度分析

- 时间复杂度：`O(N)`

- 空间复杂度：`O(N)`


