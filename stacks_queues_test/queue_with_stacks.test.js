let Queue = require('../stacks_queues/queue_with_stacks.js');

describe('QUEUE with STACKS MODULE', () => {

  it('ENQUEUE QUEUE method', () => {
    //should enqueue an element to the front NOT the back
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.front.value).toEqual(1);
  });

  it('DEQUEUE QUEUE method', () => {
    // should dequeue the element at the back NOT the front
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    let oldFront = newQueue.dequeue();

    expect(oldFront).toEqual(1);
    expect(newQueue.front.value).toEqual(2);
  });

});
