function compareTriplets(a, b) {
    console.log(a, b)
    const array = [];
    let alice = 0;
    let bob = 0;
    // Write your code here
    for (i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice = alice + 1;
        }
        else if (a[i] < b[i]) {

            bob = bob + 1;
        }
    }
    array.push(alice, bob)
    return array;

}


const result = compareTriplets([17, 28, 30, 50], [99, 16, 8, 2])
console.log(result)