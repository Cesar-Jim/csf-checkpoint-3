// Question 7: Duplicate Given an array of integers, find out whether the array contains any duplicate elements. 
// The function should return true if any value appears at least twice in the array, and false if every element is distinct.

var numbers = [2, 4, 6, 8, 10, 12, 14, 16, 20, 20];

function containsDuplicates(numSequence) {
   var isDuplicate = false;

   if (numSequence.length > 1) {

      for (let leftNum = 0; leftNum < numSequence.length - 1; leftNum++) {
         for (let rightNum = leftNum + 1; rightNum < numSequence.length; rightNum++) {
            if (numSequence[leftNum] === numSequence[rightNum]) isDuplicate = true;
         }
      }

      return isDuplicate;

   } else {
      console.log(`At least two numbers are required to check for duplicity.`);
      return false;
   }
}

console.log(containsDuplicates(numbers));