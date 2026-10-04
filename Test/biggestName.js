const name = ["udoy", "kabir", "raquib", "jaber", 'nahid']



function BiggestName(name) {


    let result = "";
    for (element of name) {
        if (element.length > result.length) {
            result = element
        }
    }
    return result
}


const outPut = BiggestName(name);
console.log(outPut)