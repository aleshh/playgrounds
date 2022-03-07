function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const array = [];

  // // my idea, negligibly faster?
  // const length = left.length < right.length ? left.length : right.length;

  // for (let i = 0; i <= length - 1; i++) {
  //   if (left[i] < right[i]) {
  //     array.push(left[i]);
  //     array.push(right[i]);
  //   } else {
  //     array.push(right[i]);
  //     array.push(left[i]);
  //   }
  // }
  // if (right.length > length) {
  //   array.push(right[right.length - 1]);
  // }
  // return array;

  // 1.679 seconds, online example
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  return array.concat(left.slice()).concat(right.slice());
}

const dumbArray = [
  99, 98, 97, 3, 1, 11, 25, 999, 127, 22, 67, 2, 12, 88, 7, 99, 98, 97, 3, 1,
  11, 25, 22, 67, 2, 12, 88, 7, 99, 98, 97, 3, 1, 11, 25, 22, 67, 2, 12, 88, 7,
  21, 11, 6,
];

const array = [5, 23, 9, 2, 11];
console.log(mergeSort(array));
