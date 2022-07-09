/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums

  let pointer = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[pointer])
  }
}




// console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));