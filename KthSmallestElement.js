function kthSmallest(arr, l, r, k) {
  // Perform the Quickselect algorithm
  let pos = partition(arr, l, r);

  // If the position of the pivot is (k - 1), then it's the kth smallest element
  if (pos - l === k - 1) {
    return arr[pos];
  }
  // If the pivot is greater than (k - 1), search in the left subarray
  else if (pos - l > k - 1) {
    return kthSmallest(arr, l, pos - 1, k);
  }
  // Otherwise, search in the right subarray
  else {
    return kthSmallest(arr, pos + 1, r, k - pos + l - 1);
  }
}

// Partition function for Quickselect
function partition(arr, l, r) {
  let x = arr[r]; // Choose the last element as the pivot
  let i = l; // Index of the smaller element

  for (let j = l; j <= r - 1; j++) {
    if (arr[j] <= x) {
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // Swap arr[i] and arr[r]
  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
}

// Example usage
const n = 6;
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
const l = 0;
const r = n - 1;

console.log(kthSmallest(arr, l, r, k)); // Output: 7
