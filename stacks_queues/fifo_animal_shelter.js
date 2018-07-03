'use strict';
let counter = 0;

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  enqueue(animal) {
    if(animal.type === 'cat') {
      animal.order = counter;
      this.animals.push(animal);
      counter++;
      return this.animals;
    }
    if(animal.type === 'dog') {
      animal.order = counter;
      this.animals.push(animal);
      counter++;
      return this.animals;
    }
    return 'wrong animal type';
    
  }
  

  dequeue(pref) {
    console.log('PREF: ', pref);

    if(pref !== 'dog' && pref !== 'cat') {
      return this.animals[0].order > this.animals[1].order ? this.animals[0].shift() : this.animals[1].shift();
    }
    // console.log('BEFORE FOR');
    // console.log('IN IF FOR: ', pref, this.animals);

    for (let i = 0; i < this.animals.length; i++) {
      if (this.animals[i].type === pref)
        // console.log('IN IF FOR: ', this.animals[i]);
        this.animals.filter(item => item !== pref);
      // let deq = this.animals[i].indexOf();
      return this.animals; 
    }
  }
}
    
module.exports = AnimalShelter;
    
      