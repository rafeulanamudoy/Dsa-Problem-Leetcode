function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApple = 0;
    let countOrange = 0
    apples.forEach(apple => {

        const appleDistance = apple + a;
        if (appleDistance >= s && appleDistance <= t) {

            countApple = countApple + 1;

        }
        else {
            return
        }
    })

    oranges.forEach(orange => {

        const orangeDistance = orange + b;
        if (orangeDistance >= s && orangeDistance <= t) {
            countOrange = countOrange + 1
        }
        else {
            return
        }
    })

    console.log(countApple)
    console.log(countOrange)



}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

// s: integer, starting point of Sam's house location.
    // t: integer, ending location of Sam's house location.
    // a: integer, location of the Apple tree.
    //b: integer, location of the Orange tree.
    // apples: integer array, distances at which each apple falls from the tree.
    // oranges: integer array, distances at which each orange falls from the tree.
