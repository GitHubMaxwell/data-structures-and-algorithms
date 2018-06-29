let Queue = require('../stacks_queues/queue_with_stacks');

// 3 tests
/*
break this down into steps

1 step make a link list constructor
*/
describe('QUEUE with STACKS MODULE', () => {

  xit('ENQUEUE method: should insert value at front of the stack and return LL whos value is 4', () => {
    const newLL = new Queue();
    newLL.append(1);
    newLL.append(2);
    // const newAppend2 = newLL.append(3);
    // console.log('BEFORE ENQUEUE ', newLL);

    const enqueue = newLL.enqueue(4);
    // console.log('AFTER ENQUEUE ', newLL);

    // console.log('HEAD VALUE ',newLL.head.val);
    const actual = newLL.head.next.val;
    expect(actual).toEqual(1);
  });

  xit('REVERSE LL method: last first value should be 2', () => {
    const newLL = new Queue();
    newLL.append(1);
    newLL.append(2);
    // const newAppend2 = newLL.append(3);
    // console.log('BEFORE REVERSE ', newLL);

    const reverse = newLL.reverse();
    // console.log('AFTER REVERSE ', newLL);

    // console.log('HEAD VALUE ',newLL.head.val);
    const actual = reverse.head.val;
    expect(actual).toEqual(2);
  });

});