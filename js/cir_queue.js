export class CircularQueue{
    constructor(k)
    {
        this.capacity = k;//容量
        this.headIdx = 0;
        this.tailBackIdx = 0;
        this.Q = [];
    }
  enqueue(el) {
    let tmp=this.tailBackIdx % this.capacity;
    this.Q[tmp] = el;
    // console.log(this.tailBackIdx % this.k)
    // console.log(el);
    this.tailBackIdx++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    this.headIdx++;
  };
  
  isEmpty() {
    return this.headIdx === this.tailBackIdx;
  };
  
  isFull() {
    return this.tailBackIdx - this.headIdx === this.capacity;
  };
  
  getFront() {
    return this.isEmpty() ? -1 : this.Q[this.headIdx % this.capacity];
  };
  
  getRear() {
    return this.isEmpty() ? -1 : this.Q[(this.tailBackIdx - 1) % this.capacity];
  };
  size(){
    return (this.tailBackIdx+this.capacity-this.headIdx) %this.capacity;
  };
  clear() {
    this.headIdx=0;
    this.tailBackIdx=0;
  };
};