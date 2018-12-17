class AnagramIdentifier {
   constructor(stringOne, stringTwo) {
      this.stringOne = stringOne;
      this.stringTwo = stringTwo;
   }

   isAnagram(stringOne, stringTwo) {
      let convertedStringOne = [...stringOne];
      let convertedStringTwo = [...stringTwo];

      this.checkSimilarity(convertedStringOne, convertedStringTwo);
   }


   checkSimilarity(convertedStringOne, convertedStringTwo) {
      let isAnagram = false;

      if (convertedStringOne.length !== convertedStringTwo.length) {
         console.log(isAnagram);
      } else {
         var numOfCharacters = convertedStringOne.length;

         for (let i = 0; i < numOfCharacters; i++) {
            for (let j = 0; j < numOfCharacters; j++) {
               if (convertedStringOne[0] === convertedStringTwo[j]) {
                  convertedStringOne.shift();
                  convertedStringTwo.splice(j, 1);
                  convertedStringOne.length === 0 ? isAnagram = true : isAnagram = false;
               }
            }
         }
         console.log(isAnagram);
      }
   }
}

var test = new AnagramIdentifier();

test.isAnagram('dugus', 'gusud');
