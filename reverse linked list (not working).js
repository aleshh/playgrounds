const list = {
  data: "one",
  next: {
    data: "two",
    next: {
      data: "three",
      next: null,
    },
  },
};

function reverseLL(head) {
  let current = head;
  let previous = null;
  let next;

  while (current.next) {
    next = current.next;

    current.next = previous;

    previous = current;
    current = next;

    console.log(current);
  }

  return current;
}

reverseLL(list);
console.log("····························································");
console.log(list);
