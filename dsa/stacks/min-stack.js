/**
 * Min Stack - push/pop/top/getMin all O(1)
 */
class MinStack {
  constructor() { this.stack = []; this.minStack = []; }
  push(val) {
    this.stack.push(val);
    const min = this.minStack.length ? Math.min(val, this.minStack.at(-1)) : val;
    this.minStack.push(min);
  }
  pop()    { this.stack.pop(); this.minStack.pop(); }
  top()    { return this.stack.at(-1); }
  getMin() { return this.minStack.at(-1); }
}
