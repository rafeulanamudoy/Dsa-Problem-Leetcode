var findMaxAverage = function (nums, k) {
    let maximumAverage=-Infinity



    let leftPointer = 0
    let rightPointer = leftPointer+k


    while (rightPointer <= nums.length) {

        let total = 0

       

        for (let i = leftPointer; i < rightPointer; i++) {
              
            total = total + nums[i]

        }

        console.log(total,"check total")
         const localAverage=total / k

        maximumAverage = Math.max(maximumAverage, localAverage)


      

        rightPointer++
      
        leftPointer++
    }



    return maximumAverage
};


const result = findMaxAverage([4,0,4,3,3], 5)

console.log(result,"check rsult")