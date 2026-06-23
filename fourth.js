// // Dirty code
// function findEvenNumbers(numbers) {
//   var evenNumbers = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }

const improvedFindEvenNumber = (numbers) =>
  numbers.filter((number) => number % 2 === 0);
console.log(improvedFindEvenNumber([1, 2, 3, 4, 5, 6, 7, 7, 7, 78, 8]));
