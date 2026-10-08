var twoSum = function (nums, target) {
    const mapArray = new Map()

    for (let i = 0; i < nums.length; i++) {

        mapArray.set(nums[i], i)
    }


    console.log(mapArray,"chdck")


    for (let i = 0; i < nums.length; i++) {

        const remain = target - nums[i]

        if (mapArray.get(remain)!==i && mapArray.get(remain)) {

            return [i, mapArray.get(remain)]
        }
    }
    return []


}

const result = twoSum([1, 3, 4, 2], 6)

console.log(result, "check result")