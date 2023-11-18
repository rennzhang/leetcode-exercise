## 题目
[1381. 设计一个支持增量操作的栈](https://leetcode.cn/problems/design-a-stack-with-increment-operation/description/)

## 思路
当进行`increment`操作时，让所有元素一次出栈进入另一个临时栈，然后再依次入栈并执行相加操作


## 代码
```js
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
  this.topPos = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  // 说明已经在栈顶的位置了，不能继续push
  if (this.topPos >= this.maxSize) return;
  this.topPos += 1;
  this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.topPos == 0) return -1;
  this.topPos -= 1;
  return this.stack.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const tempStack = [];
  const len = this.topPos;

  while (this.topPos) {
    tempStack.push(this.pop());
  }
  for (let i = 1; i <= len; i++) {
    let ele = tempStack.pop();
    if (i <= k) ele += val;
    this.push(ele);
  }
};

```

## 复杂度分析

- 时间复杂度：`O(2n)`,
> 需要进行两次遍历出入栈操作

- 空间复杂度：`O(2maxSize)`
> 需要多维护一个临时栈


