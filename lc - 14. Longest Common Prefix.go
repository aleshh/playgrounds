// https://leetcode.com/problems/longest-common-prefix/

package main

import "fmt"

func longestCommonPrefix(strs []string) string {
	result := strs[0]

	for _, currentWord := range strs {
		if len(currentWord) < len(result) {
			result = result[0:len(currentWord)]
		}

		for i, currentResultLetter := range result {
			if currentResultLetter != rune(currentWord[i]) {
				result = result[0:i]
				break
			}

			if result == "" {
				return ""
			}
		}
	}
	return result
}

func main() {
	// array := []string{"flower", "flow"}
	array := []string{"flower", "flow", "flight"}

	answer := longestCommonPrefix(array)
	fmt.Println(answer)
}
