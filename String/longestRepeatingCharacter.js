//brute force approach o(n2)
// var characterReplacement = function (s, k) {
//     let globalMax = 0;

//     for (let left = 0; left < s.length; left++) {
//         let substringFrequency = new Map();
//         let highestFrequency = 0;


//         for (let right = left; right < s.length; right++) {
//             const char = s[right];

//             substringFrequency.set(
//                 char,
//                 (substringFrequency.get(char) || 0) + 1
//             );

//             highestFrequency = Math.max(
//                 highestFrequency,
//                 substringFrequency.get(char)
//             );

//             const windowLength = right - left + 1;
//             const replacementsNeeded =
//                 windowLength - highestFrequency;

//             if (replacementsNeeded <= k) {
//                 globalMax = Math.max(globalMax, windowLength);
//             }
//         }
//     }

//     return globalMax;
// };

var characterReplacement = function (s, k) {
    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;
    const frequency = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];


        frequency.set(char, (frequency.get(char) || 0) + 1);

      
        maxFrequency = Math.max(
            maxFrequency,
            frequency.get(char)
        );

      
        const windowLength = right - left + 1;

        if (windowLength - maxFrequency > k) {
  
            const leftChar = s[left];
            frequency.set(leftChar, frequency.get(leftChar) - 1);
            left++;
        }


        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(characterReplacement("AABABBA", 1)); // 4
