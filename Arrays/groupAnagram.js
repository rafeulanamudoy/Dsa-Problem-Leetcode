var groupAnagrams = function (strs) {

    let result = [strs[0]]


    for (let i = 1; i < strs.length; i++) {
         const text=strs[i]
    
        // const indexMap = new Map()
        // for (let word = 0; word< text.length; word++) {

        //     if (indexMap.has(text[word])) {

        //         indexMap.set(text[word], indexMap.get(text[word] + 1))

        //     } else {

        //         indexMap.set(text[word], 1)
        //     }
        // }
        for (let j = 0; j < result.length; j++) {
            console.log(result,'check result')

            if (result[j].length !== text.length) {
                result.push([text])
                break
            }




        }
    }
    return result

};

//,"tan","ate","nat","bat"

const result = groupAnagrams(["tan","eats"])
console.log(result)