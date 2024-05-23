function SecondLargest(arr) {
  let larg = 0;
  let Seclarg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= larg) {
      Seclarg = larg;
      larg = arr[i];
    } else if (arr[i] < larg && arr[i] > Seclarg) {
      Seclarg = arr[i];
    }
  }
  return Seclarg;
}

const arr = [51, 3, 12, 19, 7, 39];
const result = SecondLargest(arr);

console.log(result);
