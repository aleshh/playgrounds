function fibonacci(i) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  if (!fibonacci[i]) {
    fibonacci[i] = fibonacci(i - 1) + fibonacci(i - 2);
  }
  return fibonacci[i];
}

for (let i = 0; i <= 2000; i += 1) {
  console.log(i, fibonacci(i));
}
