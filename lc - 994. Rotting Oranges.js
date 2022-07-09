// https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let count = 0;
  let currentRot = 3;

  function rot(x, y) {
    if (grid[x]?.[y] === 1) {
      grid[x][y] += 1 + count;

      return true;
    }

    return false;
  }

  function rotAdjacent(x, y) {
    const rd = rot(x + 1, y + 1);
    const ld = rot(x - 1, y + 1);
    const ru = rot(x + 1, y - 1);
    const lu = rot(x - 1, y - 1);

    if (rd || ld || ru || lu) return true;

    return false;
  }

  while (true) {
    let rotted = false;
    // console.log("····························································");
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (rotAdjacent(x, y)) {
          rotted = true;
          // console.log(x, y, "rotted");
        } else {
          // console.log(x, y, "not");
        }
      }
    }
    if (!rotted) {
      return count;
    }
    count += 1;
    currentRot += 1;
  }
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
