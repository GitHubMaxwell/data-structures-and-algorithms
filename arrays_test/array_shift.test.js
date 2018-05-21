let insertShiftArray = require('../arrays/array_shift.js');

describe('Array_Shift Module', () => {

  it('should return same array TEST 1', () => {
    expect(insertShiftArray([1,2,3], 2)).toEqual([1,2,2,3]);
  });

  it('should return same array TEST 2', () => {
    expect(insertShiftArray([1,1,1,1,1], 2)).toEqual([1,1,1,2,1,1]);
  });

  it('should return same array TEST 3', () => {
    expect(insertShiftArray([1,2,3,4,5,6,7,8], 2)).toEqual([1,2,3,4,2,5,6,7,8]);
  });

});
//