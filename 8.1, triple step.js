function stepPermutations(steps) {
  let total = 1;
  for (let i = 0; i < steps; i++) {
    total += i;
  }
  return total;
}

function stepPermutationsFromBook(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  }
  return (
    stepPermutationsFromBook(n - 1) +
    stepPermutationsFromBook(n - 2) +
    stepPermutationsFromBook(n - 3)
  );
}

for (let i = 0; i <= 30; i += 1) {
  console.log(i, stepPermutations(i), stepPermutationsFromBook(i));
}
