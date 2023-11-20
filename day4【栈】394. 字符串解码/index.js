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
      let tempS = "";
      while (stack[stack.length-1] !== "[") {
          tempS = stack.pop() + tempS;
      }
      stack.pop()
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

console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("abc100[cd]xyz"));