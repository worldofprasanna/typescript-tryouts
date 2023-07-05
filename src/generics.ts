class Queue1<T> {
  data: Array<T> = [];
  push(item: T) { this.data.push(item); }
  pop(): T { return this.data.shift()!; }
}

const que = new Queue1<number>();
que.push(123);
// queue.push('hello');

console.log(que.pop().toPrecision(1));
// console.log(que.pop().toPrecision(1));
