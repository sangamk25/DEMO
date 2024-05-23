function SecondMaxRept(arr) {
 
  let hashTable = new Map();

  for (let i = 0; i < arr.length; i++) {
    hashTable.set(arr[i], (hashTable.get(arr[i]) || 0) + 1);
  }

  let largest = 0;
  let SecondMaxRptElem = 0;

  let keys = Array.from(hashTable.keys());
  
 //When we execute let keys = Array.from(hashTable.keys());, it will perform the following steps:
//hashTable.keys(): Returns an iterable object containing the keys of the hashTable map: [1, 2, 3, 4, 6].
//Array.from(): Creates a new array containing the same elements as the iterable object returned by hashTable.keys(). So, keys will be [1, 2, 3, 4, 6].
                                           
  for (let i = 0; i < keys.length; i++) {
    let Value = hashTable.get(keys[i]);
    if (Value > largest) {
      SecondMaxRptElem = largest;
      largest = Value;
    } else if (Value !== largest && Value < largest) {
      SecondMaxRptElem = Value;
    }
  }
  return SecondMaxRptElem;
};

let arr = [1, 1, 2, 2, 2, 2, , 3, 4, 6, 6];
let Result = SecondMaxRept(arr);
console.log(Result);
