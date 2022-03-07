function Node(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(one, two) {
  console.log(">>>>························································");
  console.log(one);
  console.log(two);

  let head = new Node(0);
  let current = head;
  let previous;
  let remainder = 0;

  while (!!one || !!two) {
    let sum = (one?.val || 0) + (two?.val || 0) + remainder;
    remainder = 0;

    if (sum >= 10) {
      sum -= 10;
      remainder += 1;
    }

    current.val = sum;
    previous = current;
    current = new Node(0);

    if (one?.next || two?.next || remainder) {
      previous.next = current;
    }

    one = one?.next;
    two = two?.next;
    console.log("····························································");
    console.log(one);
    console.log(two);
  }

  return head;
}

const one = {
  val: 9,
  next: { val: 9, next: null },
};

const two = { val: 3, next: null };
// 1002

const result = addTwoNumbers(one, two);
// console.log(result);
