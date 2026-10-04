function kangaroo(x1, v1, x2, v2) {
    // Write your code here





    let firstKangaroo = x1 + v1;
    let secondKangaroo = x2 + v2;

    function findKangarooPosition(firstKangaroo, secondKangaroo) {
        const distant = firstKangaroo - secondKangaroo;

        console.log(distant)
        if (distant === 0) {

            console.log("YES")
            return
        }


        if (x1 > x2 && distant < 0) {

            console.log("NO")
            return
        }

        if (x1 < x2 && distant > 0) {

            console.log("NO")
            return
        }


        findKangarooPosition(firstKangaroo + v1, secondKangaroo + v2)






    }
    findKangarooPosition(firstKangaroo, secondKangaroo)
}


kangaroo(0, 3, 4, 2)