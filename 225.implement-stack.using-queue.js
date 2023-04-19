class MyStack {
  constructor() {
    this.pushQueue = [];
    this.popQueue = [];
  }

  push(val) {
    while (this.pushQueue.length) {
      this.popQueue.push(this.pushQueue.pop());
    }

    this.pushQueue.push(val);

    while (this.popQueue.length) {
      this.pushQueue.push(this.popQueue.pop());
    }
  }

  pop() {
    while (this.pushQueue.length) {
      this.popQueue.push(this.pushQueue.pop());
    }

    const num = this.popQueue.pop();

    while (this.popQueue.length) {
      this.pushQueue.push(this.popQueue.pop());
    }

    return num;
  }

  top() {
    return this.pushQueue[0];
  }

  empty() {
    return this.pushQueue.length === 0 && this.popQueue.length === 0;
  }
}
