'use strict';

let LinkedList = require('../ll/ll_merge.js');

describe('Linked List Detect Loop Module', () => {

  xit('INSERT: should return false', () => {
    
    const llOne = new LinkedList();
    llOne.append(1);
    llOne.append(3);


    const llTwo = new LinkedList();
    llTwo.append(2);
    llTwo.append(4);
    
    // console.log('LLONE', llOne);
    // console.log('LLTWO', llTwo);

    let mergeList = LinkedList.mergeLists(llOne, llTwo);
    console.log('MERGE LIST: ', mergeList);
  
    // expect().toBe();
  });

});