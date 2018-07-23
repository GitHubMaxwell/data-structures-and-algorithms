'use strict';

let Tree = require('../trees/breadth-first-traversal.js');

describe('Breadth First Traversal Module', () => {

  it('Test: return array [5,2,6]', () => {
    let newTree = new Tree();
    let array = [5,2,6];

    newTree.add(5);
    newTree.add(2);
    newTree.add(6);

    let breadth = Tree.breadthFirstTraversal(newTree);//?

    expect(breadth).toEqual(array);
  });

  it('Test: return array [3,2]', () => {
    let newTree = new Tree();
    let array = [3,2];
  
    newTree.add(3);
    newTree.add(2);
  
    let breadth = Tree.breadthFirstTraversal(newTree);
  
    expect(breadth).toEqual(array);
  });

  it('Test: return array [13,5,22,10]', () => {
    let newTree = new Tree();
    let array = [13,5,22,10];
  
    newTree.add(13);
    newTree.add(22);
    newTree.add(5);
    newTree.add(10);
  
    let breadth = Tree.breadthFirstTraversal(newTree);
  
    expect(breadth).toEqual(array);
  });

});