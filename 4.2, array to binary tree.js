const array = [3, 5, 7, 10, 15, 20];

function arrayToBinaryTree(a) {
  const rootI = Math.floor(a.length / 2);
  const data = a[rootI];
  const left = a.slice(0, rootI);
  const right = a.slice(rootI + 1);

  return {
    data,
    left: left.length <= 1 ? left[0] : arrayToBinaryTree(left),
    right: right.length <= 1 ? right[0] : arrayToBinaryTree(right),
  };
}

console.log(arrayToBinaryTree(array));
