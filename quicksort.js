function quickSort(arr, left, right) {
  let pivot = arr[arr.length - 1];
  left = left || 0;
  right = right || arr.length - 1;

  while (true) {
    while (arr[left] < pivot) {
      left += 1;
    }

    while (arr[right] > pivot && left < right) {
      right -= 1;
    }

    if (left === right) {
      break;
    }

    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  }

  console.log(left, right);

  return [...quickSort(arr, 0, left), ...quickSort(arr, left + 2, right)];
  return arr;
}

function randomArray(num) {
  return Array(num)
    .fill()
    .map(function randomInt() {
      return Math.ceil(Math.random() * 100);
    });
}

let arr = randomArray(7);
// let arr = [42, 57];

// let sorted = arr.sort((a, b) => a - b);

console.log(arr);
console.log(quickSort(arr));
