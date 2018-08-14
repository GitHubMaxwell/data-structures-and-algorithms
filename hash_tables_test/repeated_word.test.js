let repeated = require('../hash_tables/repeated_word.js');

describe('Repeated Word Module', () => {

  it('INSERT: should return false', () => {

    // let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    let str = 'word word';
    
    const word = repeated(str);
    
    expect(word).toEqual('word');
  }); 

});