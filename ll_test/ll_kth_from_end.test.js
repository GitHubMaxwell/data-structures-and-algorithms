let linkedList = require('../ll/ll_kth_from_end.js');

xdescribe('Linked List Kth From End Module', () => {

  it('POL: undefined', () => {
    const actual = new linkedList();
    expect(actual.length).toBe(0);
  });
  it('INSERT: from 2nd to last in linked list', () => {
    const expected = 3;
    
    const newNode = new linkedList();
    //get some nodes in the link list to start out with
    newNode.append(2);
    newNode.append(3);
    newNode.append(4);
    newNode.append(4);
    
    //entering the position 
    const kthValue = newNode.find(2);
    expect(kthValue).toBe(expected);
  });

});