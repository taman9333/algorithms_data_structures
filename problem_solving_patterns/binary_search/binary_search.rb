def binary_search(arr, val)
  left = arr[0]
  right = arr.size - 1
  middle = ((left + right) / 2).floor
  while arr[middle] != val && left <= right
    if arr[middle] > val
      right = middle - 1
    else
      left = middle + 1
    end
    middle = ((left + right) / 2).floor
  end
  return middle if arr[middle] == val

  -1
end

puts binary_search([1, 2, 5, 7, 19, 24, 32], 7)
