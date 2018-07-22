'use strict';

let Tree = require('../trees/breadth-first-traversal.js');

describe('Breadth First Traversal Module', () => {

  it('POL: creates a binary tree', () => {
    let newTree = new Tree();
    newTree.add(3);
    // console.log(newTree.head.data);
    expect(newTree.head.data).toEqual(3);
  });

  it('POL: ADD to LEFT binary tree', () => {
    let newTree = new Tree();
    newTree.add(3);
    newTree.add(2);
    // console.log(newTree);
    // console.log(newTree.head.left.data);
    expect(newTree.head.left.data).toEqual(2);
  });

  it('POL: ADD to RIGHT binary tree', () => {
    let newTree = new Tree();
    newTree.add(3);
    newTree.add(4);
    // console.log(newTree.head.right.data);
    expect(newTree.head.right.data).toEqual(4);
  });

  xit('Test: return fizzbuzz tree', () => {
    let newTree = new Tree();

    // newTree.add(3); //fizz
    newTree.add(15); //fizzbuzz
    newTree.add(6); //fizz
    newTree.add(10); //buzz
    // newTree.add(17); //17
    // newTree.add(28); //28
    // newTree.add(30); //fizzbuzz

    Tree.fizzbuzztree(newTree);//?

    // console.log(newTree.head.right.data);
    expect(newTree.head.data).toEqual('fizzbuzz');
  });



});