'use strict';
// let counter = 0;

class AnimalShelter {
  constructor() {
    this.counter = 0;
    this.animals = [];
  }

  enqueue(animal) {
    if(animal.type === 'cat' || animal.type === 'dog') {
      animal.order = this.counter;
      this.counter++;
      // console.log(animal);
      this.animals.push(animal);
      // console.log(this.animals);
      //the counter is adding stuff wrong
      return this;
    }
    return 'wrong animal type';
    
  }
  

  dequeue(pref) {
    // console.log('PREF: ', pref);
    // console.log(this.animals);

    if(pref !== 'dog' && pref !== 'cat') {

      // let choice = this.animals.indexOf(`${this.animals[i]}`);

      if (this.animals[0].order > this.animals[1].order) {
        return this.animals.splice(0, 1);
      } else {
        return this.animals.splice(1, 1);
      }
      // return this.animals[0].order > this.animals[1].order ? this.animals[0].shift() : this.animals[1].shift();
    }

    for (let i = 0; i < this.animals.length; i++) {
      // console.log('PREF: ', pref);
      if (this.animals[i].type === pref) {
        // console.log('IN IF FOR: ', this.animals[i]);
        let choice = this.animals[i];
        this.animals.filter(item => item !== pref);
        return choice;
      }
    }
  }
}
    
module.exports = AnimalShelter;
    
      