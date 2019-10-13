// Ex 1. Using filter function pick unique elements from a list [1, 2, 3, 4, 4, 2, 1, 3]

const array = [1,2,3,4,4,2,1,3];

// val - value of item in array 
// index - index of item in array
// self - array

// Filer array 
const uniqueElements = array.filter( (val, index, self) => 
  self.indexOf(val) == index 
)

console.log(uniqueElements)