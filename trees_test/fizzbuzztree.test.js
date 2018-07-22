'use strict';

let Tree = require('../trees/fizzbuzztree.js');

describe('FizzBuzzTree Module', () => {

  it('Test: return fizzbuzz tree if head is null', () => {
    let newTree = new Tree();
    Tree.fizzbuzztree(newTree);
    expect(newTree.head).toEqual(null);
  });

  it('Test: return buzz from tree node with value of 10', () => {
    let newTree = new Tree();

    newTree.add(3); //fizz
    newTree.add(15); //fizzbuzz
    newTree.add(6); //fizz
    newTree.add(10); //buzz
    newTree.add(17); //17
    newTree.add(28); //28
    newTree.add(30); //fizzbuzz

    Tree.fizzbuzztree(newTree);

    expect(newTree.head.right.left.right.data).toEqual('buzz');
  });

  it('Test: return fizz from tree node with the value of 6', () => {
    let newTree = new Tree();

    newTree.add(15); //fizzbuzz
    newTree.add(6); //fizz
    newTree.add(10); //buzz
    newTree.add(9); //17
    newTree.add(3); //28
    newTree.add(30); //fizzbuzz

    Tree.fizzbuzztree(newTree);

    expect(newTree.head.left.data).toEqual('fizz');
  });

  it('Test: return buzz from tree node with value of 100', () => {
    let newTree = new Tree();

    newTree.add(1); //fizzbuzz
    newTree.add(6); //fizz
    newTree.add(100); //buzz
    newTree.add(20); //buzz
    newTree.add(15); //fizzbuzz
    newTree.add(30); //fizzbuzz

    Tree.fizzbuzztree(newTree);

    expect(newTree.head.right.right.data).toEqual('buzz');
  });
});