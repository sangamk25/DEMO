const planets = [
    {
      name: 'Mercury',
      surfaceGasses: [],
      noOfMoon: 5,
      asRing: true,
    },
    {
      name: 'venus',
      surfaceGasses: ['co2', 'N'],
      noOfMoon: 0,
      asRing: false,
    },
    {
      name: 'Earth',
      surfaceGasses: ['N', 'O'],
      noOfMoon: 2,
      asRing: true,
    },
  ];
  
  function getSurfaceGassesWithMaxOccurrences(planets)
   {
    // Count occurrences of each surface gas using reduce 
    const gasCounts = planets.reduce((countMap, planet) => {
      planet.surfaceGasses.forEach((gas) => {
        countMap[gas] = (countMap[gas] || 0) + 1;
      });
      return countMap;
    }, {});
  
    // Find the maximum occurrence count 
    const maxOccurrences = Math.max(...Object.values(gasCounts));
  
    // Filter surface gases with maximum occurrences
    const surfaceGassesWithMaxOccurrences = Object.keys(gasCounts).filter(
      (gas) => gasCounts[gas] === maxOccurrences
    );
  
    return surfaceGassesWithMaxOccurrences;
  }
  
  const surfaceGassesWithMaxOccurrences = getSurfaceGassesWithMaxOccurrences(planets);
  console.log('Surface gases with maximum occurrences:', surfaceGassesWithMaxOccurrences);
  const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Accessing values using keys
console.log(myMap.get('key1')); // Output: 'value1'
console.log(myMap.get('key2')); // Output: 'value2'

// Checking if a key exists in the Map
console.log(myMap.has('key2')); // Output: true
console.log(myMap.has('key3')); // Output: false

let gas ='earth'
if(myMap.has(gas.toString()))
{
  myMap.set(gas.toString(),1);
}
console.log(myMap); // Output: Map(1) { 'key2' => 'value2' }