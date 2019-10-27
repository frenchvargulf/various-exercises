// First option
const array = [1, 2, 3, 4, 4, 2, 1, 3];

const findUnique = a => [...new Set(a)];

console.log(findUnique(array))

// Second option

const uniqueElements = arr => arr.filter( (val, index, self) => {
  // val - value of item in array 
  // index - index of item in array
  // self - array
  return self.indexOf(val) == index
})

console.log(uniqueElements(array))


// Second exercises


// 1

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

const output1 = (arr) => arr.map( object => object.a)

console.log(output1(input1))

// 2
const input2 = [1, 2, 3, 4];

const output2 = arr => arr.map( number => number * 2 );

console.log(output2(input2))

// 3

const input3 = [1, 2, 3, 4, 5, 6];

const output3 = arr => arr.filter( number => number % 2 === 0);

console.log(output3(input3));


// 4.

const input4 = [1, 2, 3, 4];

const output4 = (arr) => arr.reduce( (sum, element) => sum + element);

console.log(output4(input4))

// 5.

const input5 = [1, 2, 3, 4, 5, 6];

const output5 = (arr) => arr.filter( number => number % 2 != 0).reduce( (sum, element) => sum + element);

console.log(output5(input5))

// 6.

const input6 = {
  who: 'Organization',
  why: 'Harmony',
  how: 'Human'
};

const output6 = (obj) => Object.keys(obj).map((i) => {
  return {
    key: i,
    value: obj[i]
  }
})

console.log(output6(input6))


// 7.

const input7 = [{
    name: 'animal',
    age: 3
  },
  {
    name: 'human',
    age: 10
  }
]

const output7 = (arr) => Object.assign({}, ...arr.map(item => ({
  [item.name]: item.age
})));
console.log(output7(input7));

// 8.

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

const output8 = (arr) => Object.keys(arr).map((key) => {
  return {
    key: key,
    value: arr[key]
  }

})

console.log(output8(input8))
