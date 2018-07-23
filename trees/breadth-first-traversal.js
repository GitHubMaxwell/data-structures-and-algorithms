'use strict';

class TreeNode {
  //assigning defaults
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    // this.length = 0;
  }

  enqueue(value) {
    //reverse from actual enqueue action
  
    let node = new QueueNode(value);//?

    if (!this.front) {
      this.front = node;
      return this;
    }
    let current = this.front;
    while(current.next){
      // if(current.next === null) {
      //   current.next = new QueueNode(value);
      //   break;
      // }
      current.next = node;
    }
    return this;
  }

  dequeue() {

    //no front just return null
    if(!this.front) {
      return null;//?
    }

    //no next node return the value and set to null
    if(!this.front.next) {
      // let removedHead = this.front.value;//?
      this.front = null;
      return this.front;//?
    }

    //regular dequeue operations
    let regularRemoved = this.front.value;
    this.front = this.front.next;
    return regularRemoved;//?

  }
}

class Tree {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = this.head;
    //right away assign the variable node to the contextual this.head of the tree we have instantiated and are running the add method on / if theres nothing in it add the data as the value of the head
    if(node === null) {
      this.head = new TreeNode(value);
      //   console.log('HEAD NULL');
      return;

    } else {
    //   console.log('START searchTree');

      const searchTree = function(node) {
        // declaring the recursive function BUT NOT calling it (way below)
        // console.log('INSIDE searchTree');

        // going down the left side = the data is LESS than 
        if(value < node.value) {
        //   console.log('LEFT');
          if(node.left === null) {
            node.left = new TreeNode(value);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
            // recursively continue searching down left
          }
        }

        // going down the right side = the data is GREATER than 
        if(value > node.value) {
        //   console.log('RIGHT');

          if(node.right === null) {
            node.right = new TreeNode(value);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right);
            // recursively continue searching down right

          }
        } else {
          return null;
        }
      };
      return searchTree(node);
      // this is where you INITIALLY call the recursive function
    }
  }

  static breadthFirstTraversal(tree) {
    console.log(tree.head);
    console.log(tree.head.value);
    let queue = new Queue;
    // let breadthOrder = '';//?
    let breadthOrder = [];
    // queue.enqueue(tree.head);

    function _bFT(node) {
      console.log(node);
      // breadthOrder += `${node.value}, `;//?
      breadthOrder.push(node.value);//?

      if(node.left){
        // console.log(node.left.value);
        queue.enqueue(node.left);//?
      }
      if(node.right){
        // console.log(node.right.value);
        queue.enqueue(node.right);//?
      }
      if(!queue.isEmpty){
        let deq = queue.dequeue();//?
        console.log(deq);
        _bFT(queue.dequeue());
      }
      // let deq = queue.dequeue();//?
      // _bFT(deq);
      console.log(queue);
      return;
    }
    _bFT(tree.head);
    return breadthOrder;//?
  }
}

module.exports = Tree;