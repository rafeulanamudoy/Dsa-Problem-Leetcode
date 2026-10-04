function staircase(n) {




    let symbol = "#"
    let space = ""

    for (i = n - 1; i >= 0; i--) {


        let firstSymbol = space.padStart(i, " ") + symbol
        symbol = symbol + "#"
        console.log(firstSymbol)

    }





}


const result = staircase(4)



const string = " "

for (i = 4; i >= 0; i--) {
    console.log("hello")
}

