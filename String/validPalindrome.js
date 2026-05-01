var isPalindrome = function (s) {
  const cleanedWord = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let leftPointer = 0;
  let rightPointer = cleanedWord.length - 1;

  while (leftPointer < rightPointer) {
    if (cleanedWord[leftPointer] === cleanedWord[rightPointer]) {
      leftPointer++;
      rightPointer--;
    } else {
      return false;
      break
    }
  }

  return true;
};

const result = isPalindrome(" ");


