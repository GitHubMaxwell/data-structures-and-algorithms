let AnimalShelter = require('../stacks_queues/fifo_animal_shelter.js');

describe('FIFO ANIMAL SHELTER MODULE', () => {

  xit('Enqueue a cat', () => {
    let newThing = new AnimalShelter();
    let obj = {
      type:'cat',
    };
    let enqueue = newThing.enqueue(obj);
    console.log('ENQUEUE CAT: ',enqueue);

    expect(enqueue[0].type).toEqual('cat');
    expect(enqueue[0].order).toEqual(0);
  });

  xit('Enqueue a dog', () => {
    let newThing = new AnimalShelter();
    let obj = {
      type:'dog',
    };
    let enqueue = newThing.enqueue(obj);
    console.log('ENQUEUE DOG: ',enqueue);

    expect(enqueue[0].type).toEqual('dog');
    expect(enqueue[0].order).toEqual(0);    
  });

  xit('Enqueue WRONG animal type', () => {
    let newThing = new AnimalShelter();
    let obj = {
      type:'lizzard',
    };
    let enqueue = newThing.enqueue(obj);
    // console.log('ENQUEUE lizzard: ',enqueue);

    expect(enqueue).toEqual('wrong animal type');  
  });

  it('Dequeue', () => {
    let newThing = new AnimalShelter();

    let dogObj = {
      type:'dog',
    };
    let catObj = {
      type:'cat',
    };

    newThing.enqueue(catObj);
    newThing.enqueue(dogObj);
    newThing.enqueue(catObj);

    let dequeue = newThing.dequeue('dog');
    console.log('DEQUEUE: ',dequeue);

    expect(dequeue).toEqual('poop');    
  });
});

//something is wrong with the counter
//how to shift/pop off the older of the two in the dequeue