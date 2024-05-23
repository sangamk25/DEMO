function PrintSecLargest(arr, n) {
  let fl = -1;
  let sl = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > fl) {
     fl = arr[i]; 
    } 
  }
  for (let i = 0; i < n; i++) {
    if (arr[i]>sl && arr[i]<fl) {
      sl = arr[i];
    }
  }

  return sl;
}

N = 6;
Arr = [12, 35, 1, 10, 34, 1];
let Result = PrintSecLargest(Arr, N);
console.log(Result);





