// function swap(arr, i, j) {
//   var temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// function pivot(arr, start=0, end=arr.length-1) {
//   let pivot = arr[start]
//   let swapIndex = start
//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIndex++
//       swap(arr, swapIndex, i)
//     }
//   }
//   swap(arr, start, swapIndex)
//   return swapIndex
// }

// function quickSort(arr, left=0, right =arr.length-1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right)
//     // left
//     quickSort(arr, left, pivotIndex - 1)
//     // right
//     quickSort(arr, pivotIndex + 1, right)
//   }
//   return arr
// }

// function quickSort(arr){
//   let pivot = arr[0];
  
//   let lesser = [];
  
//   let greater = [];
  
//   if(arr.length < 2){
//     return arr;
//   }
  
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] < pivot){
//       lesser.push(arr[i])
//     } else {
//       greater.push(arr[i]);
//     }
//   }
  
//   return [...quickSort(lesser), pivot, ...quickSort(greater)];
  
// }

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function pivot(arr, start=0, end=arr.length-1) {
  let pivot = arr[start]
  let swapIndex = start
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      // swap
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
    }
  }
  // swap
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
  return swapIndex
}

function quickSort(arr, left=0, right =arr.length-1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

// problem with quick sort is pivoting around minimum or maximum this will be O(n^2)
console.log(quickSort([4,8,2,1,200,5,7,6,3]))