function birthdayCakeCandles(candles) {


    let array = [];

    let smallestValue = 0;
    for (let candle of candles) {


        (candle >= smallestValue) ? smallestValue = candle : smallestValue = smallestValue;


    }
    let result = candles.filter(candle => candle == smallestValue)

    return result.length

}


const output = birthdayCakeCandles([3, 2, 1, 3]);
console.log(output)