function findFactorial(number) {
    let result = 1;

    for (i = number; i > 1; i--) {



        result = result * number--;


    }
    return result
}

function easyfindFactorial(number) {
    let result = 1;
    for (i = 1; i <= number; i++) {

        result = result * i
    }
    return result
}

const outPut = findFactorial(6);
const outPut1 = easyfindFactorial(7)
console.log(outPut, outPut1)

//recursive way to find factorial



const recursiveFunction = (number) => {



    let result = 1;

    result = result * number;
    number = number - 1;
    if (number > 0) {
        console.log(number)
        recursiveFunction(number)

    }

    return result

}



const output = recursiveFunction(5);
console.log("the resultt is", output)




//3!=3*2*1
//n!=n*(n-1)!