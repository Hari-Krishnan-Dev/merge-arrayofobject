/*********************************************************************
 * Merges two arrays of objects based on their 'id' field.
 * If two objects share the same 'id', their properties are merged.
 * @param {Array} arr1 - The first input array of objects.
 * @param {Array} arr2 - The second input array of objects.
 * @return {Array} - The merged array of objects sorted by 'id'.
 *********************************************************************/
function mergeArrays(arr1, arr2) {
    const idMap = new Map(); // Map to store merged objects by id
  
    // Merge arr1 into idMap
    for (const obj1 of arr1) {
      idMap.set(obj1.id, { ...obj1 }); // Clone the object
    }
  
    // Merge arr2 into idMap (overriding values from arr1)
    for (const obj2 of arr2) {
      if (idMap.has(obj2.id)) {
        // Merge properties (arr2 overrides arr1)
        const mergedObj = { ...idMap.get(obj2.id), ...obj2 };
        idMap.set(obj2.id, mergedObj);
      } else {
        idMap.set(obj2.id, { ...obj2 }); // Clone the object
      }
    }
  
    // Convert idMap values to an array
    const joinedArray = Array.from(idMap.values());
  
    // Sort joinedArray by id in ascending order
    joinedArray.sort((a, b) => a.id - b.id);
  
    return joinedArray;
  }
  
  module.exports = {mergeArrays};
  


