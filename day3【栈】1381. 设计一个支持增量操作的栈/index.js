// /**
//  * @param {number} maxSize
//  */
// var CustomStack = function (maxSize) {
//   this.maxSize = maxSize;
//   this.stack = [];
//   this.topPos = 0;
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// CustomStack.prototype.push = function (x) {
//   // 说明已经在栈顶的位置了，不能继续push
//   if (this.topPos >= this.maxSize) return;
//   this.topPos += 1;
//   this.stack.push(x);
// };

// /**
//  * @return {number}
//  */
// CustomStack.prototype.pop = function () {
//   if (this.topPos == 0) return -1;
//   this.topPos -= 1;
//   return this.stack.pop();
// };

// /**
//  * @param {number} k
//  * @param {number} val
//  * @return {void}
//  */
// CustomStack.prototype.increment = function (k, val) {
//   const tempStack = [];
//   const len = this.topPos;

//   while (this.topPos) {
//     tempStack.push(this.pop());
//   }
//   for (let i = 1; i <= len; i++) {
//     let ele = tempStack.pop();
//     if (i <= k) ele += val;
//     this.push(ele);
//   }
// };

// /**
//  * Your CustomStack object will be instantiated and called as such:
//  * var obj = new CustomStack(maxSize)
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * obj.increment(k,val)
//  */

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
  this.topPos = 0;
  this.inc = [];
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
  this.inc.push(0);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.topPos == 0) return -1;
  let el = this.stack.pop();
  let incNum = this.inc[this.topPos - 1];
  if (incNum) {
    el += incNum;
    this.inc[this.topPos - 1] = 0;
    if (this.topPos - 2 >= 0) {
      this.inc[this.topPos - 2] += incNum;
    }
  }
  this.topPos -= 1;
  this.inc.pop();
  return el;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  if (this.topPos) {
    this.inc[Math.min(k, this.topPos) - 1] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
const obj = new CustomStack(4);
obj.push(1);
obj.push(1);
obj.push(6);
obj.pop();
obj.push(9);
obj.increment(5, 100);
console.log(obj);
obj.increment(2, 100);
console.log(obj);

console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());

console.log(obj);
