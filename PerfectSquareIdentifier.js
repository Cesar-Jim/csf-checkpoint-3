class PerfectSquareIdentifier {
   constructor(numbers) {

      this.numbers = numbers;
   }

   testNumsSequence() {
      let sum = this.numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

      this.isPerfectSquare(sum);
   }

   isPerfectSquare(sum) {

      if (sum % Math.sqrt(sum) === 0) {
         console.log(`The square root of ${sum} is ${Math.sqrt(sum)}.`);
      } else {
         console.log(`Sorry, ${sum} is not a perfect square.`)
      }
   }
}

var numsSequence = new PerfectSquareIdentifier([6, 10, 13, 12, 52, 57, 19]);

numsSequence.testNumsSequence();