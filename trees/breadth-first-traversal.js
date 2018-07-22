'use strict';

class Node {
  //assigning defaults
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.head = null;
  }
  add(data) {
    const node = this.head;
    //right away assign the variable node to the contextual this.head of the tree we have instantiated and are running the add method on / if theres nothing in it add the data as the value of the head
    if(node === null) {
      this.head = new Node(data);
      //   console.log('HEAD NULL');
      return;

    } else {
    //   console.log('START searchTree');

      const searchTree = function(node) {
        // declaring the recursive function BUT NOT calling it (way below)
        // console.log('INSIDE searchTree');

        // going down the left side = the data is LESS than 
        if(data < node.data) {
        //   console.log('LEFT');
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
            // recursively continue searching down left
          }
        }

        // going down the right side = the data is GREATER than 
        if(data > node.data) {
        //   console.log('RIGHT');

          if(node.right === null) {
            node.right = new Node(data);
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
      
  }
}

module.exports = Tree;