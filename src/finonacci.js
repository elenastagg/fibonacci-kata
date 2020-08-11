const calculateFibonacci = (n) => {
  const fibonacci = [0, 1];
  for (let index = 0; index < n; index += 1) {
    fibonacci.push(fibonacci[index] + fibonacci[index + 1]);
  }
  return fibonacci[n];
};
// console.time("fibonacciTimer");
// console.log(calculateFibonacci(50));
// console.timeEnd("fibonacciTimer");

module.exports = calculateFibonacci;
