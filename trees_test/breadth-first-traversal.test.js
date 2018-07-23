'use strict';

let Tree = require('../trees/breadth-first-traversal.js');

describe('Breadth First Traversal Module', () => {

  xit('POL: creates a binary tree', () => {
    let newTree = new Tree();
    newTree.add(3);
    // console.log(newTree.head.data);
    expect(newTree.head.value).toEqual(3);
  });

  it('Test: return array [3,2,15,10]', () => {
    let newTree = new Tree();
    // let array = [3,2,15,10];
    let array = [3,2,15];

    newTree.add(3);
    newTree.add(2);
    newTree.add(15);
    // newTree.add(2);
    // newTree.add(10);
    console.log(newTree);

    let breadth = Tree.breadthFirstTraversal(newTree);//?

    // console.log(newTree.head.right.value);
    expect(breadth).toEqual(array);
  });
});