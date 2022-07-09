// function mergeSort(array) {
//   if (array.length <= 1) return array;

//   const middle = Math.floor(array.length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const array = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       array.push(left.shift());
//     } else {
//       array.push(right.shift());
//     }
//   }

//   return array.concat(left.slice()).concat(right.slice());
// }
function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.slice()).concat(right.slice());
}

const dumbArray = [
  99, 98, 97, 3, 1, 11, 25, 999, 127, 22, 67, 2, 12, 88, 7, 99, 98, 97, 3, 1,
  11, 25, 22, 67, 2, 12, 88, 7, 99, 98, 97, 3, 1, 11, 25, 22, 67, 2, 12, 88, 7,
  21, 11, 6,
];

const array = [5, 23, 9, 2, 11];
console.log(mergeSort(dumbArray));
