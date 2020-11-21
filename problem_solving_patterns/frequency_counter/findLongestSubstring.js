function findLongestSubstring(str) {
  let fc = {}
  let count = 0
  let finalCount = 0
  for (let i = 0; i < str.length; i++) {
    if (fc[str[i]] === undefined) {
      fc[str[i]] = i
      count +=1
    } else {
      i = fc[str[i]]
      count = 0
      fc = {}
    }
    finalCount = Math.max(finalCount, count)
  }
  return finalCount
}

findLongestSubstring('longestsubstring')