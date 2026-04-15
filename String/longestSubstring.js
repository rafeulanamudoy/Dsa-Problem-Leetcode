
var lengthOfLongestSubstring = function (s) {


    // console.log(s.length,"check")

    if (!s.length) {
        return 0
    }

    // if (s.length && s.trim() === "") {
    //     return 1
    // }
    let globalLongestSubstring = s[0].toString()





    for (let i = 0; i < s.length - 1; i++) {
        // console.log(i,"cehck ")

        let localLongestSubstring = s[i].toString()
        for (let j = i + 1; j <= s.length - 1; j++) {

           console.log(j,"nested loop")
            if (localLongestSubstring.includes(s[j])) {

                // console.log(s[i],s[j],"in loop of nester")
                break
            }


            localLongestSubstring = localLongestSubstring.concat(s[j])
            console.log(localLongestSubstring)


        }


        if (localLongestSubstring.length > globalLongestSubstring.length) {

            globalLongestSubstring = localLongestSubstring

        }


    }
    return globalLongestSubstring.length

};


const result = lengthOfLongestSubstring("au")
console.log(result)