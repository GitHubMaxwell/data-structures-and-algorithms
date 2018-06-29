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
    } else {
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

      // this conditional isnt right
      if (current === this.head) {
        //if we are on the HEAD, change the value to the one passed in
        oneOver = current.val;
        // console.log('ONE OVER ', oneOver);
        current.val = val;
        // console.log('CURRENT VAL should be three: ', current.val);
        //change the current to the next
        current = current.next;
        // console.log('NEW CURRENT should be two', current);
      }

      //if we are at the end of the list create a new node and add the currently held oneOver value to it and end the while loop
      if (current.next === null) {
        // console.log('ONE OVER here should be two: ', oneOver);
        this.length = this.length + 1;
        current.next = new Node(oneOver);
        break;
      }

      // hold the value ahead of us temporarily to be placed a position after that while placing the currently held temp value on the current we are on
      // console.log('SHOULD BE HERE TWICE');
      current.val = oneOver;
      oneOver = current.val;
      current = current.next;
    }
  }
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
  //if stack 2 isnt empty
  //return stack2.shift -- remove the top node of stack
  //else
  //while stack1 isnt empty
  //push/ element into stack2
  //return stack2.shift




  
  // dequeue() {
  //   // using FIFO approach
  //   // if(stack2.length) {

  //   // }
  // }
}
module.exports = Queue;
  
    

/*


enqueue(value) {

  // get to the end of the stack and create and append a new node there while moving the null back a length
  if (current.next === null) {
        this.length = this.length + 1;
        current.next = new Node(oneOver);
        break;
      }

}
*/