let linkedList = require('../ll/ll_kth_from_end.js');

describe('Linked List Kth From End Module', () => {

  xit('POL: undefined', () => {
    const actual = new linkedList();
    expect(actual.length).toBe(0);
  });
  xit('INSERT: from 2nd to last in linked list', () => {
    const expected = 3;
    
    const newNode = new linkedList();
    //get some nodes in the link list to start out with
    const newAppend = newNode.append(2);
    const newAppend1 = newNode.append(3);
    const newAppend2 = newNode.append(4);
    const newAppend3 = newNode.append(4);
    
    //entering the position 
    const kthValue = newNode.find(2);
    expect(kthValue).toBe(expected);
  });

});