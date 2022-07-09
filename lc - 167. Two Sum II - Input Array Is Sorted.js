// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  numbers.unshift(null);
  const complements = new Map();

  for (
    let left = 1, right = numbers.length - 1;
    left < numbers.length;
    left++, right--
  ) {
    const leftNum = numbers[left];
    const rightNum = numbers[right];
    const leftComplement = complements.get(leftNum);
    complements.set(target - leftNum, left);

    complements.set(target - rightNum, right);
    const rightComplement = complements.get(rightNum);

    if (leftComplement && leftComplement !== left) {
      return [left, leftComplement].sort();
    }

    if (rightComplement && rightComplement !== right) {
      return [rightComplement, right].sort();
    }
  }

  return null;
};
