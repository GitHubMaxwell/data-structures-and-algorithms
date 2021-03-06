let linkedList = require('../ll/ll_detect_loop.js');

xdescribe('Linked List Detect Loop Module', () => {

  it('INSERT: should return false', () => {
    
    const linkList = new linkedList();
    linkList.append(2);
    linkList.append(4);
    linkList.append(6);
    linkList.append(7);
    
    expect(linkList.hasLoop()).toBe(false);
  });


  it('INSERT: should return false', () => {
    
    const linkList = new linkedList();
    linkList.append(2);
    linkList.append(4);
    linkList.append(6);
    linkList.append(7);

    linkList.head.next.next.next.next = linkList.head.next;
    console.log('LINK LIST TEST: ',linkList.head.next.next.next);
    expect(linkList.hasLoop()).toBe(true);
  });

});




