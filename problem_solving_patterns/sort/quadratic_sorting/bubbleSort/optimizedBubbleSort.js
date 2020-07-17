function bubbleSort(arr){
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        // swap function
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// bubbleSort([1,0,5,7,8,9,21]) loop 21 times