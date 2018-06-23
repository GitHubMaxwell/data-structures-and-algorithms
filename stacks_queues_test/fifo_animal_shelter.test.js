let Queue = require('../stacks_queues/fifo_animal_shelter.js');

describe('QUEUE with STACKS MODULE', () => {

  xit('ENQUEUE method: should insert value at front of the stack and return LL whos value is 4', () => {
    const newLL = new Queue();
    const newAppend = newLL.append(1);
    const newAppend1 = newLL.append(2);
    // const newAppend2 = newLL.append(3);
    console.log('BEFORE ENQUEUE ', newLL);

    const enqueue = newLL.enqueue(4);
    console.log('AFTER ENQUEUE ', newLL);

    // console.log('HEAD VALUE ',newLL.head.val);
    const actual = newLL.head.next.val;
    expect(actual).toEqual(2);
  });

});