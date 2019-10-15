describe('Find the unique values in array - findUnique', function () {
  it('Defines maxOfTwoNumbers', function () {
    expect(typeof findUnique ).toBe('function');
  });

  it('First parameter larger', function () {
    console.log( findUnique([1,2,3,3]))
    console.log( findUnique([1,2,3]))
    expect( findUnique( [1,2,3,3] )).toEqual([ 1,2,3]);
  });

});

describe('Find the first values in array - output1', function () {
  it('Defines output1', function () {
    expect(typeof output1).toBe('function');
  });

  it('returns [] with an empty array', function () {
    expect(output1([])).toEqual([]);
  });

  it('returns the array with a first-word from object', function () {
    expect(output1(
      [{
        a: 1,
        b: 2
      },
      {
        a: 5,
        b: 8
      },
      {
        a: 'aaaa',
        c: 'aaaaa'
      }
      ]
    )).toEqual( [1, 5, 'aaaa'] );
  });

});

describe('Find the first values in array - output2', function () {
  it('Defines output2', function () {
    expect(typeof output2).toBe('function');
  });

  it('returns [] with an empty array', function () {
    expect(output2([])).toEqual([]);
  });

  it('returns the array with a first-word from object', function () {
    expect(output2(input2)).toEqual( [2, 4, 6, 8] );
  });

});

describe('Find the first values in array - output3', function () {
  it('Defines output3', function () {
    expect(typeof output3).toBe('function');
  });

  it('returns [] with an empty array', function () {
    expect(output3([])).toEqual([]);
  });

  it('returns the array with a first-word from object', function () {
    expect(output3(input3)).toEqual( [2, 4, 6] );
  });

});

describe('Reduce values - output4', function () {
  it('Defines output4', function () {
    expect(typeof output4).toBe('function');
  });
  it('reduces an array values to sum', function () {
    expect(output4(input4)).toEqual( 10 );
  });
});

describe('Reduce values - output5', function () {
  it('Defines output5', function () {
    expect(typeof output5).toBe('function');
  });

  it('reduces to one number', function () {
    expect(output5(input5)).toEqual( 9 );
  });

});

describe('Reduce values - output6', function () {
  it('Defines output6', function () {
    expect(typeof output6).toBe('function');
  });

  it('reduces to one number', function () {
    expect(output6(input6)).toEqual( [
        {key: 'who', value: 'Organization'},
        {key: 'why', value: 'Harmony'},
        {key: 'how', value: 'Human'}
      ] );
  });

});

describe('Reduce values - output7', function () {
  it('Defines output7', function () {
    expect(typeof output7).toBe('function');
  });

  it('reduces to one number', function () {
    expect(output7(input7)).toEqual( {animal: 3, human: 10} );
  });

});

describe('Create the new object - output8', function () {
  it('Defines output8', function () {
    expect(typeof output8).toBe('function');
  });

  it('returns [] with an empty array', function () {
    expect(output8([])).toEqual([]);
  });

  it('returns the new nested object array', function () {
    expect(output8(input8)).toEqual(   [
            {key: 'key1', value: 1},
            {key: 'key2', value: 'tar'},
            {
              key: 'key3',
              value: [
                {name: 'animal', age: 3},
                {name: 'human', age: 10}
              ]
            }
          ] );
  });

});

