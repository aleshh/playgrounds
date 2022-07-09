// https://leetcode.com/problems/build-array-from-permutation/submissions/

package main

import "fmt"

func buildArray(nums []int) []int {
    length := len(nums)
	result := make([]int, length)

    for i, _ := range nums {
        result[i] = nums[nums[i]]
    }

    return result
}

func main () {
	array := []int{5,0,1,2,3,4}

	answer := buildArray(array)
	fmt.Println(answer)
}