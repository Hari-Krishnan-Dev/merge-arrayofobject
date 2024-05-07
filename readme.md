# mergeArrays Function
##### The mergeArrays function merges two arrays of objects based on their id field. If two objects share the same id, their properties are merged. The resulting array is sorted by id.
# Usage
1. Install the package (if not already done):
```sh
npm install mergearrayofobjectbyid
```
2. Import the mergeArrays function:
```sh
const mergeArrays = require('my-awesome-package');
```
3. Use the function:
```sh
const arr1 = [
  { id: 1, name: 'Alice', age: 30 },
  // ... other objects
];

const arr2 = [
  { id: 2, name: 'Bob', city: 'New York' },
  // ... other objects
];

const result = mergeArrays(arr1, arr2);
console.log(result);

```

# Parameters
- arr1 (Array): The first input array of objects.
- arr2 (Array): The second input array of objects.
# Return Value
- An array of merged objects sorted by id.
