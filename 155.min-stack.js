/**
 * @param {number} val
 * @return {void}
 */
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const minVal = this.minStack.length > 0 ? this.getMin() : Infinity;

    this.minStack.push(Math.min(minVal, val));
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
