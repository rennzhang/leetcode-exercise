## 题目
[394. 字符串解码](https://leetcode.cn/problems/decode-string/)

## 思路
当进行`increment`操作时，让所有元素一次出栈进入另一个临时栈，然后再依次入栈并执行相加操作


## 代码
```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let str = "";
  let num = "";
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (el == "]") {
      let popEl = "";
      let tempS = "";
      while (popEl !== "[") {
        popEl = stack.pop();
        if (popEl !== "[") {
          tempS = popEl + tempS;
        }
      }
      let nnn = parseInt(stack.pop())
      for (let ii = 0; ii < nnn; ii++) {
        stack.push(tempS);
      }
    } else if (el == "[") {
      stack.push(num);
      num = "";
      stack.push(el);
    } else if (!isNaN(parseInt(el))) {
      num += el;
    } else {
      stack.push(el);
    }
  }

  while (stack.length) {
    str = stack.pop() + str;
  }
  return str;
};

```
## 复杂度分析

- 时间复杂度：`O(N)`

- 空间复杂度：`O(N)`


