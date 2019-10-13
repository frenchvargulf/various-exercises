// First option
const array = [1,2,3,4,4,2,1,3];

const findUnique = a =>[...new Set(a)]

console.log(findUnique(array))

// Second option
const uniqueElements = arr => arr.filter( (val, index, self) => {
  // val - value of item in array 
  // index - index of item in array
  // self - array
  return self.indexOf(val) == index 
})

console.log( uniqueElements(array) )
