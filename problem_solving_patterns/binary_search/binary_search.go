package main

import "fmt"

func main() {
	items := []int{1, 2, 9, 20, 31, 45, 63, 70, 100}
	fmt.Println(binarySearch(items, 63))
}

func binarySearch(s []int, val int) int {
	left := s[0]
	right := len(s) - 1
	middle := (left + right) / 2
	for s[middle] != val && left <= right {
		if s[middle] > val {
			right = middle - 1
		} else {
			left = middle + 1
		}
		middle = (left + right) / 2
	}
	if s[middle] == val {
		return middle
	}

	return -1
}
