class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.length = length + 1;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.length = 0;
  }

  enqueue(value) {
    //reverse from actual enqueue action
  
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      return this.front;
    }
    let current = this.front;
    while(current){
      if(current.next === null) {
        current.next = new Node(value);
        break;
      }
      current = current.next;
    }
    return this.front;
  }

  dequeue() {
    let oldFront = this.front;
    this.front = this.front.next;
    return oldFront.value;
  }
}
module.exports = Queue;

/*

reverse(){
    let temp1 = null;
    let current = this.head;
    let temp2;
  
    while (current) {
      temp2 = current.next;
      current.next = temp1;
      temp1 = current;
      current = temp2;
    }
    this.head = temp1;
  }
*/