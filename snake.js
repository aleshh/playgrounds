const width = 36;
const height = 16;

const EMPTY = " ";

const EAST = "EAST";
const WEST = "WEST";
const NORTH = "NORTH";
const SOUTH = "SOUTH";

let board = [];
let direction = null;
let snakeLength = 1;
let displayTarget;
let gameInterval;

function displayBoard() {
  let html = "";
  for (let row = 0; row < height; row++) {
    let current = "";
    for (let cell = 0; cell < width; cell++) {
      current += board[row][cell] !== EMPTY ? "&#9619;&#9619;" : "&#9590; ";
    }
    html += current + "<br>";
  }
  displayTarget.innerHTML = html;
}

function displayGameOver() {
  displayTarget.innerHTML += "<p>Game Over!</p>";
}

function availableCellCount() {
  let count = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (board[y][x] === EMPTY) {
        count++;
      }
    }
  }
  return count;
}

function getSnakeHeadCoordinates() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (board[y][x] === 0) {
        return [x, y];
      }
    }
  }
  return [null, null];
}

function incrementSnake({ grow }) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (board[y][x] !== EMPTY) {
        const isLastBody = board[y][x] === snakeLength - 1;

        if (isLastBody && !grow) {
          board[y][x] = EMPTY;
        } else {
          board[y][x] = board[y][x] + 1;
        }
      }
    }
  }
}

function newHead({ x, y }) {
  switch (direction) {
    case EAST:
      x++;
      break;
    case WEST:
      x--;
      break;
    case NORTH:
      y--;
      break;
    case SOUTH:
      y++;
      break;
    default:
      console.error("No direction!");
  }

  // wrap around
  if (x >= width) x = 0;
  if (x < 0) x = width - 1;
  if (y >= height) y = 0;
  if (y < 0) y = height - 1;

  if (board[y][x] !== EMPTY) {
    direction = null;
  } else {
    board[y][x] = 0;
  }
}

function initializeGame() {
  function placeSnakeAtCenter() {
    const x = Math.floor(width / 2);
    const y = Math.floor((height - 1) / 2);

    board[y][x] = 0;
  }

  function createKeyListeners() {
    function setDirection(e) {
      e.code;
      switch (e.code) {
        case "ArrowUp":
          direction = NORTH;
          break;
        case "ArrowDown":
          direction = SOUTH;
          break;
        case "ArrowLeft":
          direction = WEST;
          break;
        case "ArrowRight":
          direction = EAST;
          break;
        default:
          break;
      }
    }
    document.addEventListener("keydown", setDirection);
  }

  displayTarget = document.getElementById("root");

  board = Array(height)
    .fill()
    .map(() => Array(width).fill(EMPTY));
  placeSnakeAtCenter();
  createKeyListeners();
}

function playGame() {
  displayBoard();

  function gameLoop() {
    if (!direction) return;
    let [x, y] = getSnakeHeadCoordinates();
    incrementSnake({ grow: true });
    newHead({ direction, x, y });

    if (direction) {
      displayBoard();
    } else {
      displayGameOver();
      clearInterval(gameInterval);
    }
  }

  gameInterval = setInterval(gameLoop, 200);
}

initializeGame();
playGame();
