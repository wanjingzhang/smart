/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 * push x 到队列的末尾
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 * 从队列的开头移除并返回元素
 */
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    if (!this.inStack.length) {
      return -1;
    } else {
      this.in2out();
    }
  }
  return this.outStack.pop();
};

MyQueue.prototype.in2out = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
};

/**
 * @return {number}
 * 返回队列开头的元素
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length > 0) return this.outStack[this.outStack.length - 1];
  else if (this.inStack.length > 0) return this.inStack[0];
};

/**
 * @return {boolean}
 * 如果队列为空，返回true，否则返回false
 */
MyQueue.prototype.empty = function () {
  if (this.outStack.length || this.inStack.length) {
    return false;
  } else {
    return true;
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
