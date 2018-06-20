class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.length = length + 1;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
    
  append(val) {
  
    if(!this.head) {
      this.head = new Node(val);
      this.length = this.length + 1;
  
    }else{
      let current = this.head;
  
      while(current.next) {
        current = current.next;
      }

      current.next = new Node(val);
      this.length = this.length + 1;
    }
  }

  enqueue(val) {
    //using FIFO approach
    // console.log('PASSED IN VALUE ', val);

    let current = this.head;
    // console.log('CURRENT ', current);

    // let oneOver = current.next.val;
    let oneOver;

    while(current.next) {

      if (current === this.head) {
        //if we are on the HEAD, change the value to the one passed in
        oneOver = current.val;
        console.log('ONE OVER ', oneOver);
        current.val = val;
        console.log('CURRENT VAL should be three: ', current.val);
        //change the current to the next
        current = current.next;
        console.log('NEW CURRENT should be two', current);
      }

      //if we are at the end of the list create a new node and add the currently held oneOver value to it and end the while loop
      if (current.next === null) {
        console.log('ONE OVER here should be two: ', oneOver);
        this.length = this.length + 1;
        current.next = new Node(oneOver);
        break;
      }

      // hold the value ahead of us temporarily to be placed a position after that while placing the currently held temp value on the current we are on
      console.log('SHOULD BE HERE TWICE'); 
      current.val = oneOver;
      oneOver = current.val;
      current = current.next;
    }
  }

//   dequeue() {
//     // using FIFO approach
      
//   }

}
  
module.exports = Queue;
  
    