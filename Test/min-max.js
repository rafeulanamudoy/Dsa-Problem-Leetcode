function miniMaxSum(arr) {
    // Write your code here


    const maxValue = Math.max(...arr)
    const minValue = Math.min(...arr)


    const minArray = arr.filter(item => item != maxValue)
    const maxArray = arr.filter(item => item != minValue)


    const result1 = arr.reduce((a, b) => a + b, 0) - maxValue
    const result2 = arr.reduce((a, b) => a + b, 0) - minValue

    console.log(result1 + " " + result2)

}


miniMaxSum([1, 3, 5, 7, 9])