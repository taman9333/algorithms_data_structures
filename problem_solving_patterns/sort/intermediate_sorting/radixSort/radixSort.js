function getDigit(num, i) {
  strNum = String(Math.abs(num));
  return Number(strNum[strNum.length - 1 - i] || 0)
}

function digitCount(num) {
  return String(Math.abs(num)).length
}

function mostDigits(arr) {
  let maxDigits = 0
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]))
  }
  return maxDigits
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr)
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let j = 0; j < arr.length; j++) {
      let numDigit = getDigit(arr[j], i)
      digitBuckets[numDigit].push(arr[j])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}