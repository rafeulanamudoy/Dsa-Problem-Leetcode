var isPalindrome = function (s) {
  let cleanedWord = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();



  if (cleanedWord.length == 0 || cleanedWord.length == 1) {
    return true;
  }

  if(cleanedWord[0]!==cleanedWord[cleanedWord.length-1]){
    return false
  
  }
cleanedWord = cleanedWord.slice(1, -1);

  return isPalindrome(cleanedWord)

   

};

const result = isPalindrome("A man, a plan, a canal: Panama")

console.log(result)
