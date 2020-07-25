function selectionSort(arr){
  for (let i = 0; i < arr.length; i++) {
    var minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // dont swap if i & minIndex are equal [0, 2, 34, 22, 10, 19, 17]
    // we don't need to swap 0 nor 2
    if (i !== minIndex) {
      var temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp 
    }
  }
  return arr
}

// also selection sort is terrible as it is n square (n ^ 2)
// but it might be better than bubble sort bec of memory usage as we only swap at the end of the nested loop