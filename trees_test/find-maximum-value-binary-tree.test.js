'use strict';

let Tree = require('../trees/find-maximum-value-binary-tree.js');


describe('Find Maximum Value Binary Tree Module', () => {

  it('TEST: maximum value returned should be 4', () => {
    let newTree = new Tree();
    newTree.insert(3);
    newTree.insert(1);
    newTree.insert(4);

    let max = Tree.findMaximumValue(newTree);
    expect(max).toEqual(4);
  });

  it('TEST: maximum value returned should be 18', () => {
    let newTree = new Tree();
    newTree.insert(13);
    newTree.insert(10);
    newTree.insert(14);
    newTree.insert(11);
    newTree.insert(18);

    let max = Tree.findMaximumValue(newTree);
    expect(max).toEqual(18);
  });

  it('TEST: maximum value returned should be 114', () => {
    let newTree = new Tree();
    newTree.insert(31);
    newTree.insert(111);
    newTree.insert(4);
    newTree.insert(4);
    newTree.insert(112);


    let max = Tree.findMaximumValue(newTree);
    expect(max).toEqual(112);
  });


});