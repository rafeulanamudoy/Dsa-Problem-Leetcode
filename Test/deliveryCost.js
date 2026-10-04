//for 100 tshirt 100 tk
//200 tar moddhe prothom 100 tar jonno 100 pore 101 theke 200 er jonno 80
//200 tar beshi hole prothom 100 jonno 100 pore 101 theke 200 jonno 80 r 201 theke 50

const deliveryCost = (tshirt) => {

    if (tshirt < 100) {

        return tshirt * 100
    }
    else if (tshirt > 100 && tshirt < 200) {

        return 100 * 100 + (tshirt - 100) * 80
    }

    else if (tshirt > 200) {

        return 100 * 100 + 100 * 80 + (tshirt - 200) * 50
    }

}

const outPut = deliveryCost(144);
console.log(outPut)