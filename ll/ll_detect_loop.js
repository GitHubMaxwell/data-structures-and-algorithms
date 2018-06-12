class NewNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.length = length + 1;
  }
}
class LinkedList {
  constructor() {
    //this.root = null
    this.head   = null;
    this.length = 0;
  }
    
  append(val) {
  
    if(!this.head) {
      this.head = new NewNode(val);
      this.length = this.length + 1;
  
    }else{
      let current = this.head;
  
      while(current.next) {
        current = current.next;
      } 
      current.next = new NewNode(val);
      this.length = this.length + 1;
    }
  }
  
  hasLoop() {
    let current = this.head;

    while(current) {
      if(current.isVisited) return true;

      // else { current.isVisited = true; }

      current.isVisited = true;

      current = current.next;
    }
    return false;
  }
}
module.exports = LinkedList;