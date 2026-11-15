
/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//     let read = 0;
//     let write = 1;
//     let count = 1;

//     let copy = [...chars];
//     chars.length = 0;

//     while (write < copy.length) {
//         if (copy[read] === copy[write]) {
//             count++;
//         } else {
//             chars.push(copy[read]);

//             if (count > 1) {
//                 chars.push(...String(count));
//             }

//             count = 1;
//             read = write;
//         }

//         write++;
//     }


//     if (copy.length > 0) {
//         chars.push(copy[read]);

//         if (count > 1) {
//             chars.push(...String(count));
//         }
//     }

//     return chars.length;
// };

var compress = function(chars) {
    let read = 0;
    let write = 0;

    while (read < chars.length) {


        // console.log(read,write,"check read write")
        let currentChar = chars[read];
        let count = 0;

        while (read < chars.length && currentChar === chars[read]) {
            count++;
            read++;
        }

        chars[write] = currentChar;
        write++;
 console.log(read,write, count, chars,"check count write")
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    console.log(chars);
    return write;
};

const result=compress(["a","a","a","b","b","c","c","c"])


console.log(result,)