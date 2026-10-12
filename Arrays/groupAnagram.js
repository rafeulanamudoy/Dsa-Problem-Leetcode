var groupAnagrams = function (strs) {
    let result = [[strs[0]]];

    let isAnagram = true;

    for (let i = 1; i < strs.length; i++) {
        const currentWord = strs[i];

        let foundGroup = false;

        const currentWordFrequency = new Map();

        for (let charIndex = 0; charIndex < currentWord.length; charIndex++) {
            const char = currentWord[charIndex];

            if (currentWordFrequency.has(char)) {
                currentWordFrequency.set(
                    char,
                    currentWordFrequency.get(char) + 1
                );
            } else {
                currentWordFrequency.set(char, 1);
            }
        }

        for (let groupIndex = 0; groupIndex < result.length; groupIndex++) {
            const existingGroupWord = result[groupIndex][0];

            isAnagram = true;

            if (currentWord.length !== existingGroupWord.length) {
                isAnagram = false;
            } else {
                const remainingCharFrequency = new Map(currentWordFrequency);

                for (let charIndex = 0; charIndex < existingGroupWord.length; charIndex++) {
                    const char = existingGroupWord[charIndex];

                    if (!remainingCharFrequency.has(char)) {
                        isAnagram = false;
                        break;
                    }

                    remainingCharFrequency.set(
                        char,
                        remainingCharFrequency.get(char) - 1
                    );

                    if (remainingCharFrequency.get(char) < 0) {
                        isAnagram = false;
                        break;
                    }
                }
            }

            if (isAnagram) {
                result[groupIndex].push(currentWord);
                foundGroup = true;
                break;
            }
        }

        if (!foundGroup) {
            result.push([currentWord]);
        }

        currentWordFrequency.clear();
    }

    return result;
};

console.log(
    groupAnagrams(["tan", "eat", "ate", "tea", "nas", "bat"])
);