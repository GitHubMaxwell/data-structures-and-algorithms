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
    // console.log('llOne.head: ',currentOne)
    // let tempOne = currentOne.next;
    let tempOne = llOne.head;
    // console.log('llOne.next: ',tempOne)
    let currentTwo = llTwo.head;
    // console.log('llOne.head: ',llOne.head)
    let tempTwo = llTwo.head;
    //if llOne.head !== llTwo.head {do that} because you only have to do it once
    //currentOne = currentTwo;
  
    while(currentOne.next === null || currentTwo.next === null) {
      currentTwo.next = tempOne;
      tempOne = tempTwo.next;
    }
  }
}

//these functions will go in the tests  
function llOne() {
  let newNode = new LinkedList();
  newNode.append(1);
  newNode.append(3);
  // console.log('llOne',newNode)
  // console.log('newNode Head next val',newNode.head.next.next.next.val)
  return newNode;
}
let linkOne = llOne();
  
function llTwo() {
  let newNode = new LinkedList();
  newNode.append(2);
  newNode.append(4);
  // console.log('llTwo',newNode)
  // console.log('newNode Head next val',newNode.head.next.next.next.val)
  return newNode;
}
let linkTwo = llTwo();
  
// console.log('linkOne',linkOne);
// console.log('linkTwo',linkTwo);
  
//have to call
// let mergeList = linkOne.mergeLists(linkOne,linkTwo);
let mergeList = LinkedList.mergeLists(linkOne, linkTwo);
console.log('mergeList: ',mergeList);
  
  