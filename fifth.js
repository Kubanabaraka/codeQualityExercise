// function calculateFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     var factorial = 1;
//     for (var i = 2; i <= n; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
// }

const improvedCalculateFactorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * improvedCalculateFactorial(n - 1);
};
console.log(improvedCalculateFactorial(5));
