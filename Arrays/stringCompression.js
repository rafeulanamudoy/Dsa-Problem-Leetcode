
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0;
    let write = 1;
    let count = 1;

    let copy = [...chars];
    chars.length = 0;

    while (write < copy.length) {
        if (copy[read] === copy[write]) {
            count++;
        } else {
            chars.push(copy[read]);

            if (count > 1) {
                chars.push(...String(count));
            }

            count = 1;
            read = write;
        }

        write++;
    }


    if (copy.length > 0) {
        chars.push(copy[read]);

        if (count > 1) {
            chars.push(...String(count));
        }
    }

    return chars.length;
};

const result=compress(["a","b","c"])