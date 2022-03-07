// https://leetcode.com/problems/add-two-numbers/

function createList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { val: arr[i], next: list };
  }

  return list;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let remainder = 0;
  let sum = 0;

  const head = l1;

  while (l1 || l2) {
    console.log(".");
    let val1 = l1?.val || 0;
    let val2 = l2?.val || 0;

    sum = val1 + val2 + remainder;
    remainder = 0;

    if (sum > 9) {
      sum -= 10;
      remainder += 1;
    }

    console.log(l1);

    l1.val = sum;
    l1 =
      l1.next || (remainder || l2.next ? { val: remainder, next: null } : null);
    l2 = l2.next || null;

    console.log(l1);

    // console.log("......");
    // console.log(l1);
    // console.log(l2);
  }

  return head;
};

const l1 = createList([2, 4, 3]);
const l2 = createList([5, 6, 4, 1]);

const sum = addTwoNumbers(l1, l2);
console.log("····························································");
console.log(sum);

// const l3 = createList([2, 4, 6]);
// const l4 = createList([5, 6, 9]);

// const sum2 = addTwoNumbers(l3, l4);
// console.log(sum2);
