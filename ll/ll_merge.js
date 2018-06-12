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

  static mergeLists(llOne, llTwo) {
    let currentOne = llOne.head;
    //this should stay llOne head
    let currentTwo = llTwo.head;

    // let tempOne = llOne.head;
    // let tempTwo = llTwo.head;

  
    while(currentOne.next === null || currentTwo.next === null) {
    // while(currentOne || currentTwo) {
      
      if(!currentTwo) {
        currentOne.length++;
        return currentOne;
      }
      if(currentOne.next === null) {
        currentOne.next = currentTwo;
        //if theres not a next node in the first list then reassign the last value the current second list node is and then add to the lenght and send back the listOne
        currentOne.length++;
        return currentOne;
      }
      /////////////////////////////////
      let tempOne = llOne.head;
      let tempTwo = llTwo.head;
      /////////////////////////////////

      currentOne.next = currentTwo;
      //which current two is the head at this point
      currentTwo.next = tempOne.next;

      currentOne = tempOne.next;
      currentTwo = tempTwo.next;
      console.log('LLONE CURRENT ',currentOne);
    }//while loop

    // console.log('LLONE CURRENT ',currentOne);

  }
}

module.exports = LinkedList;

  