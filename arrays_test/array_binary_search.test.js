let BinarySearch = require('../arrays/array_binary_search.js');

describe('Array Binary Search Module', () => {

  it('should return 1 TEST 1', () => {
    expect(BinarySearch([1,2,3],2)).toEqual(1);
  });

  it('should return 2 TEST 2', () => {
    expect(BinarySearch([4,8,15,16,23,42],15)).toEqual(2);
  });

  it('should return -1 TEST 3', () => {
    expect(BinarySearch([11,22,33,44,55,66,77],90)).toEqual(-1);
  });

  it('should return -1 TEST 4', () => {
    expect(BinarySearch([1,2,3],4)).toEqual(-1);
  });

});