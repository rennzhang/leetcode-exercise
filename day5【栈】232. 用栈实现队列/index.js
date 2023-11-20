var MyQueue = function () {
  this.queue = [];
  this.stackA = [];
  this.stackB = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
  this.stackA.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stackB.length) {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
  }
  return this.stackB.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.stackB.length) {

    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
  }
  return this.stackB[this.stackB.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackB.length && !this.stackA.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue()
obj.push(1)
obj.push(2)
console.log("1",obj);

console.log("1",obj.peek());

console.log("2",obj.pop());
console.log(obj.empty());