let Queue = require('../stacks_queues/queue_with_stacks');

describe('Linked List Insertion Module', () => {

  it('ENQUEUE: should insert value at front of the stack and return LL whos value is 4', () => {
    const newLL = new Queue();
    const newAppend = newLL.append(1);
    const newAppend1 = newLL.append(2);
    // const newAppend2 = newLL.append(3);
    console.log('BEFORE ENQUEUE ', newLL);

    const enqueue = newLL.enqueue(4);
    console.log('AFTER ENQUEUE ', newLL);

    // console.log('HEAD VALUE ',newLL.head.val);
    const actual = newLL.head.val;
    expect(actual).toEqual(4);
  });

});