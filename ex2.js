// Ex 2. Using reduce, map & filter function transform given data structures
//   Tips:
//     - different ways to call object fields  (obj.a, obj['a'])
//     - different ways to assign values to Object fields {[a]: b} (where a is a value)
//     - chaining functions (a.filter().map())

// 1.
//   - input
//     [
//       {a: 1, b: 2},
//       {a: 5, b: 8},
//       {a: 'aaaa', c: 'aaaaa'}
//     ]
//   - output (field 'a' picked from every object)
//     [1, 5, 'aaaa]

const input1 = [{
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

const output1 = input1.map((object) => {
  return object.a
})

console.log(output1)


// 2.
//   - input
//     [1, 2, 3, 4]
//   - output (multiplying every element by 2)
//     [2, 4, 6, 8]


const input2 = [1, 2, 3, 4];

const output2 = input2.map((number) => {
  return number * 2
})

console.log(output2)


// 3.
//   - input
//     [1, 2, 3, 4, 5, 6]
//   - output (picking even numbers)
//     [2, 4, 6]

const input3 = [1, 2, 3, 4, 5, 6];
const output3 = (arr) = arr.filter((number) => {
  return number % 2 === 0;
})

console.log(output3(input3))


// 4.
//   - input
//     [1, 2, 3, 4]
//   - output (sum of the elements)
//     10


const input4 = [1, 2, 3, 4];
const output4 = input4.reduce((prev, next) => {
  return prev + next;
})

console.log(output4)

// 5.
//   - input
//     [1, 2, 3, 4, 5, 6]
//   - wyjście (suma nieparzystych elementów tablicy)
//     9

const input5 = [1, 2, 3, 4];
const output5 = input5.filter(((number) => {
  return number % 2 != 0;
})).reduce((prev, next) => {
  return prev + next;
})

console.log(output5)

// 6.
//   - input
//     {who: 'Organization', why: 'Harmony', how: 'Human'}
//   - wyjście (lista obiektów klucz-wartość)
//     (tip: wykorzystanie Object.keys)
//     [
//       {key: 'who', value: 'Organization'},
//       {key: 'why', value: 'Harmony'},
//       {key: 'how', value: 'Human}
//     ]

const input6 = {
  who: 'Organization',
  why: 'Harmony',
  how: 'Human'
};
const keys = Object.keys(input6)
const values = Object.values(input6)

const output6 = Object.keys(input6).map((i) => {
  return {
    key: i,
    value: input6[i]
  }
})

console.log(output6)


// 7.
//   - input
//     [
//       {name: 'animal', age: 3},
//       {name: 'human', age: 10}
//     ]
//   - output (object {key: value})
//     {animal: 3, human: 10}

const input7 = [{
    name: 'animal',
    age: 3
  },
  {
    name: 'human',
    age: 10
  }
]


const output7 = Object.assign({}, ...input7.map(item => ({
  [item.name]: item.age
})));
console.log(output7);


// 8.
//   - input
const input8 = {
  key1: 1,
  key2: 'tar',
  key3: [{
      name: 'animal',
      age: 3
    },
    {
      name: 'human',
      age: 10
    }
  ]
}

const output8 = Object.keys(input8).map((key) => { 
  return {
    key: key,
    value: input8[key]
}

})

console.log(output8)
//   - output (array of objects for each key and value)
//     [
//       {key: 'key1', value: 1},
//       {key: 'key2', value: 'tar'},
//       {
//         key: 'key3',
//         value: [
//           {name: 'animal', age: 3},
//           {name: 'human', age: 10}
//         ]
//       }
//     ]