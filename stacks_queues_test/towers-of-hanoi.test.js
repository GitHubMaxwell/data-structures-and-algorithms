let Tower = require('../stacks_queues/towers-of-hanoi.js');

describe('TOWER OF HANOI MODULE', () => {
  
  function findLast(tower) {
    let current = tower.top;
    let lastValue;
    while(current) {
      lastValue = current.value;
      current = current.next;
    }
    return lastValue;
  }

  it('should be to top 1 and bottom 5', () => {

    const tower = Tower.towersOfHanoi(5);
    const top = tower.top.value;
    const bottom = findLast(tower);

    expect(top).toEqual(1);
    expect(bottom).toEqual(5);
  });

  it('should be to top 1 and bottom 3', () => {

    const tower = Tower.towersOfHanoi(3);
    const top = tower.top.value;
    const bottom = findLast(tower);

    expect(top).toEqual(1);
    expect(bottom).toEqual(3);
  });

  it('should be to top 1 and bottom 10', () => {

    const tower = Tower.towersOfHanoi(10);
    const top = tower.top.value;
    const bottom = findLast(tower);

    expect(top).toEqual(1);
    expect(bottom).toEqual(10);
  });

});