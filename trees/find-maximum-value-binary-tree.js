'use strict';

class Node {
  //assigning defaults
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = this.head;
    //right away assign the variable node to the contextual this.head of the tree we have instantiated and are running the add method on / if theres nothing in it add the value as the value of the head
    if(node === null) {
      this.head = new Node(value);
      //   console.log('HEAD NULL');
      return;

    } else {
    //   console.log('START searchTree');

      const searchTree = function(node) {
        // declaring the recursive function BUT NOT calling it (way below)
        // console.log('INSIDE searchTree');

        // going down the left side = the value is LESS than 
        if(value < node.value) {
        //   console.log('LEFT');
          if(node.left === null) {
            node.left = new Node(value);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
            // recursively continue searching down left
          }
        }

        // going down the right side = the value is GREATER than 
        if(value > node.value) {
        //   console.log('RIGHT');

          if(node.right === null) {
            node.right = new Node(value);
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

  static findMaximumValue(tree) {
    let value;
    function _findMaximumValue(node) {
      if(!node.right) {
        return value = node.value;//?
      }
      _findMaximumValue(node.right);
    }
    _findMaximumValue(tree.head);//?
    return value;//?
  }

} //close class

module.exports = Tree;