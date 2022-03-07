// https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function createList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { val: arr[i], next: list };
  }

  return list;
}

var sortList = function (head) {
  if (!head?.val) return;

  let arr = [head.val];
  while (head.next) {
    head = head.next;
    arr.push(head.val);
  }

  arr = arr.sort();

  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { val: arr[i], next: list };
  }

  return list;
};

const list = {
  val: 4,
  next: {
    val: -1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

// console.log(list);
const createdList = createList([1, -1, 2, 4, 3]);
console.log(sortList(list));
console.log(sortList(createdList));
