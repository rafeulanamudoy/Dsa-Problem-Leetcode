var characterReplacement = function (s, k) {

    let leftPointerOfSubstring = 0;

    let global = 0;
    while (leftPointerOfSubstring < s.length - k) {


        let substringFrequency = new Map()
        let rightPointerOfSubstring = leftPointerOfSubstring + k

        for (let i = leftPointerOfSubstring; (i <= rightPointerOfSubstring && rightPointerOfSubstring < s.length); i++) {

            if (substringFrequency.has(s[i])) {

                substringFrequency.set(s[i], substringFrequency.get(s[i]) + 1)
            }
            else {
                substringFrequency.set(s[i], 1)
            }
        }

        let highestFrequencyCharProp = [...substringFrequency.entries()].sort((a, b) => b[1] - a[1])[0]


        console.log(highestFrequencyCharProp, substringFrequency)

        let repeatSubstringLength = k == 0 ? 0 : k + 1;
        let repeatSubstringFrequency = highestFrequencyCharProp[1]

        for (let i = rightPointerOfSubstring + 1; i < s.length; i++) {

            if (highestFrequencyCharProp[0] === s[i]) {
                repeatSubstringLength = repeatSubstringLength + 1
                continue
            }
            else {

                if (repeatSubstringFrequency === 0) {
                    break
                }

                repeatSubstringFrequency = repeatSubstringFrequency - 1;
                repeatSubstringLength = repeatSubstringLength + 1


            }

            break

        }

        global = Math.max(global, repeatSubstringLength)

        leftPointerOfSubstring++




    }

    return global

};


const result = characterReplacement("AAAB", 0)

console.log(result)