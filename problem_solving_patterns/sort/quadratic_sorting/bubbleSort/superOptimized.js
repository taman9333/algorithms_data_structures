// if there is one time there is no swap we need to break
// The above function always runs O(n^2) time even if the array is sorted.
// It can be optimized by stopping the algorithm if inner loop didn’t cause any swap.
function bubbleSort(arr){
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        // swap function
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break;
  }
  return arr
}

// bubbleSort([1,0,5,7,8,9,21]) loop 11 times