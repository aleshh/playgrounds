package main

import "fmt"

func main() {

	a := "abra"
	b := "1aaaaaaaaabracadabra"
	result := b[0:len(a)]

	fmt.Println(result)
}
