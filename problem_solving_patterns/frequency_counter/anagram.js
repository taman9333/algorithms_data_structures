// bad one
// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   for (const char of str1) {
//     str2_index = str2.indexOf(char)
//     if (str2_index === -1) {
//       return false
//     }
//     str2 = str2.replace(char, '')
//   }
//   return true
// }

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let fc1 = {}
  let fc2 = {}
  for (const char of str1) {
    fc1[char] = (fc1[char] || 0) + 1
  }
  for (const char of str2) {
    fc2[char] = (fc2[char] || 0) +1
  }
  for (const key in fc1) {
    if (!(key in fc2)) {
      return false
    }
    if (fc1[key] !== fc2[key]) {
      return false
    }
  }
  return true
}

// another version with only 2 loops
// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   let obj = {}
//   for (const char of str1) {
//     obj[char] = (obj[char] || 0) + 1
//   }
//   for (const char of str2) {
//     if (!(obj[char])) {
//       return false
//     } else {
//       obj[char] -= 1
//     }
//   }
//   return true
// }