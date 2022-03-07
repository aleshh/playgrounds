// three arrays, the first item is the bottom block, the last is the top

function moveBlocks(n) {
  const one = Array(n)
    .fill()
    .map((_, i) => n - i);

  const two = [];
  const three = [];

  function top(arr) {
    if (arr.length === 0) return null;
    return arr[arr.length - 1];
  }

  function canMove(arrFrom, arrTo) {
    if (!top(arrFrom)) return false;
    if (top(arrFrom) && !top(arrTo)) return true;

    return top(arrFrom) < top(arrTo);
  }

  function moveBlock(arrFrom, arrTo) {
    arrTo.push(arrFrom.pop());
  }

  function moveIfCan(arrFrom, arrTo) {
    if (canMove(arrFrom, arrTo)) {
      moveBlock(arrFrom, arrTo);
      return true;
    }
    return false;
  }

  function move(one, two, three) {
    if (canMove(one, two)) {
      moveBlock(one, two)
    } else if (canMove(one, three) {
      moveBlock(one, three)
    }
  }

  move(one, two, three);
}

moveBlocks(3);

// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// const trees = [];

// trees.push(plants.pop());

// console.log(plants);
// console.log(trees);
