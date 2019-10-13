# various-exercises


Ex 1. Using filter function pick unique elements from a list [1, 2, 3, 4, 4, 2, 1, 3]

Ex 2. Using reduce, map & filter function transform given data structures
  Tips:
    - different ways to call object fields  (obj.a, obj['a'])
    - different ways to assign values to Object fields {[a]: b} (where a is a value)
    - chaining functions (a.filter().map())

1.
  - input
    [
      {a: 1, b: 2},
      {a: 5, b: 8},
      {a: 'aaaa', c: 'aaaaa'}
    ]
  - output (field 'a' picked from every object)
    [1, 5, 'aaaa]

2.
  - input
    [1, 2, 3, 4]
  - output (multiplying every element by 2)
    [2, 4, 6, 8]

3.
  - input
    [1, 2, 3, 4, 5, 6]
  - output (picking even numbers)
    [2, 4, 6]

4.
  - input
    [1, 2, 3, 4]
  - output (sum of the elements)
    10

5.
  - input
    [1, 2, 3, 4, 5, 6]
  - wyjście (suma nieparzystych elementów tablicy)
    9

6.
  - input
    {who: 'Organization', why: 'Harmony', how: 'Human'}
  - wyjście (lista obiektów klucz-wartość)
    (tip: wykorzystanie Object.keys)
    [
      {key: 'who', value: 'Organization'},
      {key: 'why', value: 'Harmony'},
      {key: 'how', value: 'Human}
    ]

7.
  - input
    [
      {name: 'animal', age: 3},
      {name: 'human', age: 10}
    ]
  - output (object {key: value})
    {animal: 3, human: 10}

8.
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

Ex 3. Promises
Using array of IP addresses — (array of strings) [“1.1.1.1”,“2.2.2..2",“3.3.3.3”,“4.4.4.4"],
using Axios library for HTTP API calls and API `ip-api.com`, return a Promise for a list of objects containing names and companies assigned to IP addresses in the array. Use non-mutable functional-programming approach.

Proper result (inside a Promise):
[
  {ip: "1.1.1.1", country: "Australia", as:"Cloudflare Inc"},
  {ip: "2.2.2.2", country: "Korea", as:"Innyflare Inc"},
]

Tip: Example `ip-api.com` api call for 1.1.1.1 address is a GET to `http://ip-api.com/json/1.1.1.1`

Ex 4. Styling
Build and style any two components as a VUE.JS components (pick appropriate free to use photos and fonts. Upload results to a website like surge.sh, etc.

Pick component designs from this repository.
https://www.dropbox.com/s/9vhz9dgaoh28keq/UI_Kit_Widgets.zip