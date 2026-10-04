//brute force approach time complexity o n3 
// var lengthOfLongestSubstring = function (s) {




//     if (!s.length) {
//         return 0
//     }


//     let globalLongestSubstring = s[0].toString()
//     for (let i = 0; i < s.length - 1; i++) {


//         let localLongestSubstring = s[i].toString()
//         for (let j = i + 1; j <= s.length - 1; j++) {


//             if (localLongestSubstring.includes(s[j])) {


//                 break
//             }


//             localLongestSubstring = localLongestSubstring.concat(s[j])
//             console.log(localLongestSubstring)


//         }


//         if (localLongestSubstring.length > globalLongestSubstring.length) {

//             globalLongestSubstring = localLongestSubstring

//         }


//     }
//     return globalLongestSubstring.length

// };
//sliding window techniqu
var lengthOfLongestSubstring = function (s) {

    // let maxLength = 0;
    // let trackString = new Map()


    // let left = 0

    // for (let right = 0; right < s.length; right++) {

    //     if (trackString.has(s[right])) {

    //         left = left + 1;
       
    //         continue
    //     }

    //     trackString.set(s[right], right)
    
    //     maxLength = Math.max(maxLength, trackString.size)


    // }
    // return maxLength
    let map = new Map();  // char → last seen index
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1; 
        }

        map.set(s[right], right);  
        console.log(map,right)
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

};

const result = lengthOfLongestSubstring("pwwkew")
console.log(result)