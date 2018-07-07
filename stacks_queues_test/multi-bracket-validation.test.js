let multiBracketValidation = require('../stacks_queues/multi-bracket-validation.js');

describe('BRACKET VALIDATION MODULE', () => {

  it('should resolve to true', () => {

    const str = multiBracketValidation('{}');
    // console.log('STR: ',str);
    expect(str).toEqual(true);
  });

  it('should resolve to true', () => {
    const str = multiBracketValidation('{}(){}');
    expect(str).toEqual(true);
  });

  it('should resolve to true', () => {
    const str = multiBracketValidation('()[[Extra Characters]]');
    expect(str).toEqual(true);
  });

  it('should resolve to true', () => {
    const str = multiBracketValidation('(){}[[]]');
    expect(str).toEqual(true);
  });

  it('should resolve to true', () => {
    const str = multiBracketValidation('{}{Code}[Fellows](())');
    expect(str).toEqual(true);
  });

  it('should resolve to false', () => {
    const str = multiBracketValidation('[({}]');
    expect(str).toEqual(false);
  });

  it('should resolve to false', () => {
    const str = multiBracketValidation('(](');
    // console.log('STR: ',str);
    expect(str).toEqual(false);
  });
});