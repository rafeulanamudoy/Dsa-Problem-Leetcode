

const isBadVersion = (value) => {


    let firstBadVersion = 4


    if (value >= firstBadVersion) {
        console.log(value, "check vaule")
        return true
    }

    else if (value < firstBadVersion) {
        console.log(value, "check value in else if  ")
        return false
    }

}

var solution = function (n) {

    let left = 1;
    let right = n
    if (n == 1) {
        return false
    }
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        const version = isBadVersion(middle)
        console.log(left, middle, right)

        if (isBadVersion(middle) === true && isBadVersion(middle - 1) == false) {
            return middle
        }

        else if (version === true) {

            right = middle - 1

        }
        else {
            left = middle + 1
        }

    }


};

const result = solution(1)

console.log(result, "check result")