
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
  //in each method what do you need to keep track of / what node and when you get tot he desired node do you need to make a new node and assign its next to it and remove or change th enext of the previous node

  append(val) {
    //create a new node
    //add it by changing the next on the last node?
    if(!this.head) {
      //if there isnt this.head / make a new one? / make the new node inside the head key of the node object????
      this.head = new NewNode(val);
      this.length = this.length + 1;
    }else{
      let current = this.head;
      
      //checks if the current node has a next is truthy and once its falsy make that current the current.next and then add a node after it
      while(current.next) {
        current = current.next;
      }
      
      current.next = new NewNode(val);
      this.length = this.length + 1;

      //return what? needs to return?
      // return this.head;
    }
  }

  insertBefore(val, newVal) {
    //build the new instance first
    let newNode = new NewNode(newVal);
    //assign 
    let current = this.head;

    //check if the first node of the link list is the 
    if(this.head.val === val) {
      this.head = newNode;
      this.head.next = current;
      this.length = this.length + 1;
      return;
    }

    // while(current.val !== val) {
    //   current = current.next;
    // }
    while(current.next) {
      if(current.next.val === val) {
        //if the val of the node your on matches what were looking for break out of the while and finish the 
        break;
      } else {
        current = current.next;
      }
      //the following two lines re-assign the nexts of all invovled nodes
      newNode.next = current.next;
      current.next = newNode;
      this.length = this.length + 1;
    }
  }

  // insertAfter(val, newVal) {
  //   let newNode = new NewNode(val);

  //   if(!this.head) {
  //     this.head = new NewNode(val);
  //     this.length = this.length + 1;

  //   }else{
  //     let current = this.head;

  //     while(current.next.val !== val) {
  //       current = current.next;
  //     }

  //     current.next = new NewNode(newVal);
  //     this.length = this.length + 1;
  //   }
  // }

  // insertAfter(val, newVal) {
  //   let newNode = new NewNode(newVal);
  //   let current = this.root;
  //   while(current) {
  //     if(current.value === val) {
  //       newNode.next = current.next;
  //       current.next = newNode;
  //       break;
  //     }
  //     current = current.next;
  //   }
  // }
}
module.exports = LinkedList;


// class LinkedList {
//   constructor() {
//     this.head   = null;
//     this.length = 0;
//   }
  
//   add(data) {
//     const nodeToAdd = new Node(data);
//     let nodeToCheck = this.head;

//     if(!nodeToCheck) {
//       this.head = nodeToAdd;
//       this.length++;

//       return nodeToAdd;
//     }

//     while(nodeToCheck.next) {
//       nodeToCheck = nodeToCheck.next;
//     }

//     nodeToCheck.next = nodeToAdd;
//     this.length++;
//     return nodeToAdd;
//   }
// }

//////serialize and deserialize
//serialize = turn into string
//deserialize = turn back into object or array etc

// function serialize() {
//   let str = '';
//   let node = this.root;

//   while (node) {
//     str += '[' + node.value + '] -> ';
//     node = node.next;
//   }

//   str += '[X]';
//   return;
// [apples] -> [bananas] -> [X]
//need to turn it into this and back into an actual link list
// }

//kth from end

//