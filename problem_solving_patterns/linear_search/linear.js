// linear search is o(N)
// we could use binary search that works on sorted array with o(log(N))

function linear_search(arr, val){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}