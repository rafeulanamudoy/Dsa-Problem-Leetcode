arr = [1, 1, 0, - 1, -1];


function plusMinusArray(arr) {


    let ProportionArray = []



    const plusElement = (arr.filter(element => element > 0).length) / arr.length

    const minusElement = (arr.filter(element => element < 0).length) / arr.length
    const zeroElement = (arr.filter(element => element == 0).length) / arr.length



    return console.log(plusElement.toFixed(6) + "\n" + minusElement.toFixed(6) + "\n" + zeroElement.toFixed(6))






}

plusMinusArray(arr)
