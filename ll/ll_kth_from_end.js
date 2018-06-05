
class NewNode {
  constructor(data) {
    this.data = data;
    this.counter = 0;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }
  append(val) {

    if(!this.head) {
      this.head = new NewNode(val);
      // current.counter = current.counter + 1;
    }else{
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new NewNode(val);
      this.length = this.length + 1;
      current.counter = current.counter + 1;
    }
  }
  find(pos) {
    
    let current = this.head;
    //need to find the length - the position variable
    let position = this.length - pos;

    //loop over the linked list looking for the designated counter compared to the position passed in as an argument
    while(position !== current.counter) {
      current = current.next;
      if(current.counter === pos) {
        return current.data;
      }
    }
  }
}
  
module.exports = LinkedList;
