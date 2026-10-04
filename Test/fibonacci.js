
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181

//output=first+second
const fibonacciSeries = (n) => {


    let first = 0;
    let second = 1;
    let sum;


    if (n == 0) {
        return first
    }
    if (n == 1) {
        return second
    }



    for (i = 2; i <= n; i++) {

        sum = first + second;

        first = second;
        second = sum;





    }
    return second

}





const result = fibonacciSeries(4)
console.log(result)


const string = "hello my name is udoy"


console.log(string.indexOf("y"))