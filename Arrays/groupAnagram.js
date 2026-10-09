var groupAnagrams = function (strs) {

    let result = [[strs[0]]]


    for (let i = 1; i < strs.length; i++) {
        const currentText = strs[i]

        let tempTrack = true;
        

        const indexMap = new Map()
        for (let word = 0; word < currentText.length; word++) {

            if (indexMap.has(currentText[word])) {


                indexMap.set(currentText[word], indexMap.get(currentText[word]) + 1)

            } else {

                indexMap.set(currentText[word], 1)
            }
        }



        for (let j = 0; j < result.length; j++) {
            const secondText = result[j][0]
           


            for (let trackWord = 0; secondText.length > 0; trackWord++) {
                if (!indexMap.has(secondText[trackWord])) {
                    tempTrack = false;
              
                    break

                }
                indexMap.set(secondText[i], indexMap.get(secondText[trackWord]) - 1);

                if (indexMap.get(secondText[trackWord]) < 0) {
                    tempTrack = false;
              
                    break
                }
            }

            tempTrack = true
            result[j].push(currentText)
            break

        }
        if (!tempTrack) {
            result.push([currentText])
        }

    }
    return result

};

//,"tan","ate","nat","bat"

const result = groupAnagrams(["tan", "eat", "ate", "tea", "nat", "bat"])
console.log(result)