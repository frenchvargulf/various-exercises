# JS | Functions & Arrays

# First exercise

Using filter function pick unique elements from a list [1, 2, 3, 4, 4, 2, 1, 3]

# Second Exercise
## Using reduce, map & filter function transform given data structures

Using reduce, map & filter function transform given data structures

## 1.
  - input
    [
      {a: 1, b: 2},
      {a: 5, b: 8},
      {a: 'aaaa', c: 'aaaaa'}
    ]
  - output (field 'a' picked from every object)
    [1, 5, 'aaaa]

## 2.
  - input
    [1, 2, 3, 4]
  - output (multiplying every element by 2)
    [2, 4, 6, 8]

## 3.
  - input
    [1, 2, 3, 4, 5, 6]
  - output (picking even numbers)
    [2, 4, 6]

## 4.
  - input
    [1, 2, 3, 4]
  - output (sum of the elements)
    10

## 5.
  - input
    [1, 2, 3, 4, 5, 6]
  - wyjście (suma nieparzystych elementów tablicy)
    9

## 6.
  - input
    {who: 'Organization', why: 'Harmony', how: 'Human'}
  - wyjście (lista obiektów klucz-wartość)
    (tip: wykorzystanie Object.keys)
    [
      {key: 'who', value: 'Organization'},
      {key: 'why', value: 'Harmony'},
      {key: 'how', value: 'Human}
    ]

## 7.
  - input
    [
      {name: 'animal', age: 3},
      {name: 'human', age: 10}
    ]
  - output (object {key: value})
    {animal: 3, human: 10}

## 8.
  - input
    {
      key1: 1,
      key2: 'tar',
      key3: [
        {name: 'animal', age: 3},
        {name: 'human', age: 10}
      ]
    }
  - output (array of objects for each key and value)
    [
      {key: 'key1', value: 1},
      {key: 'key2', value: 'tar'},
      {
        key: 'key3',
        value: [
          {name: 'animal', age: 3},
          {name: 'human', age: 10}
        ]
      }
    ]
