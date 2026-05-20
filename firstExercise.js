function calculateAverage(numbers) {
  //   var sum = 0;
  //   var count = 0;
  //   for (var i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //     count++;
  //   }
  //   var average = sum / count;
  //   return average;

  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}

console.log(calculateAverage([1, 1, 1, 1]));
