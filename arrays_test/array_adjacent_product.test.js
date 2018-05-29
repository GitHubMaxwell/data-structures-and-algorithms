let adaProd = require('../arrays/array_adjacent_product.js');

describe('Array Adjacent Product Module', () => {

  it('should return 6 from matrix [[2,3]]', () => {
    const expected = 6;
    const actual = adaProd([[2,3]]);
    expect(actual).toEqual(expected);
  });
  it('should return 15 from matrix [[1,3,5]]', () => {
    const expected = 15;
    const actual = adaProd([[1,3,5]]);
    expect(actual).toEqual(expected);
  });
  it('should return 18 from matrix [[1],[3],[6]]', () => {
    const expected = 18;
    const actual = adaProd([[1,3,6]]);
    expect(actual).toEqual(expected);
  });
  it('should return 12 from matrix [[1,3],[2,4]]', () => {
    const expected = 12;
    const actual = adaProd([[1,3],[2,4]]);
    expect(actual).toEqual(expected);
  });
  it('should return 12 from matrix [[1,3],[4,2]]', () => {
    const expected = 12;
    const actual = adaProd([[1,3],[4,2]]);
    expect(actual).toEqual(expected);
  });
  it('should return 12 from matrix [[1,3,5],[2,4,6]]', () => {
    const expected = 30;
    const actual = adaProd([[1,3,5],[2,4,6]]);
    expect(actual).toEqual(expected);
  });
  it('should return 64 from matrix [[3,6,8],[7,8,1]]', () => {
    const expected = 64;
    const actual = adaProd([[3,6,8],[7,8,1]]);
    // console.log(actual);
    expect(actual).toEqual(expected);
  });
  it('should return 64 from matrix [[1,2,1],[2,4,2],[3,6,8],[7,8,1]]',() => {
    const expected = 64;
    const actual = adaProd([[1,2,1],[2,4,2],[3,6,8],[7,8,1]]);
    // console.log(actual);
    expect(actual).toEqual(expected);
  });
  it('should return 4 from matrix [[1,1,1],[1,1,2],[1,2,1],[1,1,1]]',() => {
    const expected = 4;
    const actual = adaProd([[1,1,1],[1,1,2],[1,2,1],[1,1,1]]);
    // console.log(actual);
    expect(actual).toEqual(expected);
  });
});