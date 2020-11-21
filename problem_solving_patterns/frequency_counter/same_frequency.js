function sameFrequency(int1, int2) {
  let str_int1 = int1.toString()
  let str_int2 = int2.toString()
  if (str_int1.length !== str_int2.length) {
    return false
  }
  let lookup = {}
  for (const num of str_int1) {
    lookup[num] = (lookup[num] || 0) + 1
  }
  for (const num of str_int2) {
    if (!(lookup[num])) {
      return false
    } else {
      lookup[num] -= 1
    }
  }
  return true
}