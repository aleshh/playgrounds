const tree = {
  data: 22,
  left: {
    data: 20,
    left: { data: 10, left: { data: 3, left: null, right: null }, right: null },
    right: { data: 21, left: null, right: null },
  },
  right: {
    data: 30,
    left: {
      data: 29,
      left: { data: 25, left: null, right: null },
      right: null,
    },
    right: null,
  },
};

function traverse({ data, left, right }) {
  console.log(data);
  if (left) traverse(left);
  if (right) traverse(right);
}

traverse(tree);
