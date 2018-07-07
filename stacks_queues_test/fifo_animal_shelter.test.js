let AnimalShelter = require('../stacks_queues/fifo_animal_shelter.js');

describe('FIFO ANIMAL SHELTER MODULE', () => {

  xit('Enqueue a cat', () => {
    const newThing = new AnimalShelter;
    let obj = {
      type:'cat',
    };
    let enqueue = newThing.enqueue(obj);
    let type = enqueue.animals[0].type;
    let order = enqueue.animals[0].order;


    expect(type).toEqual('cat');
    expect(order).toEqual(0);
  });

  xit('Enqueue a dog', () => {
    let obj = {
      type:'dog',
    };
    const newThing = new AnimalShelter;
    
    let enqueue = newThing.enqueue(obj);
    // console.log('ENQUEUE DOG: ',enqueue);
    let type = enqueue.animals[0].type;
    let order = enqueue.animals[0].order;


    expect(type).toEqual('dog');
    expect(order).toEqual(0);
  });

  xit('Enqueue WRONG animal type', () => {
    const newThing = new AnimalShelter;
    let obj = {
      type:'lizzard',
    };
    let enqueue = newThing.enqueue(obj);
    expect(enqueue).toEqual('wrong animal type');
  });

  it('Dequeue', () => {
    const newThing = new AnimalShelter;

    let dogObj = {
      type:'dog',
    };
    let catObj = {
      type:'cat',
    };

    newThing.enqueue(catObj);
    newThing.enqueue(dogObj);

    let dequeue = newThing.dequeue('dog');
    console.log('DEQUEUE: ',dequeue);

    expect(dequeue.type).toEqual('dog');    
  });

  it('Dequeue', () => {
    const newThing = new AnimalShelter;

    let dogObj = {
      type:'dog',
    };
    let catObj = {
      type:'cat',
    };

    newThing.enqueue(catObj);
    newThing.enqueue(catObj);
    newThing.enqueue(dogObj);
    console.log('DEQUEUE: ',newThing);

    let dequeue = newThing.dequeue();
    // console.log('DEQUEUE: ',dequeue);

    expect(dequeue[0].type).toEqual('cat');    
  });
});

//something is wrong with the counter
//how to shift/pop off the older of the two in the dequeue