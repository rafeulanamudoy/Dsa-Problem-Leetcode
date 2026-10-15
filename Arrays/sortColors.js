var sortColors = function (nums) {


    let read = 0
    let write=1



    while (read<nums.length ) {


        if (nums[read] > nums[write]) {
               console.log("swap")
            let temp=nums[read]
            nums[read] = nums[write]

            nums[write]=temp;
            read++
        }
       
        write++

       

    }


    return nums
};


const result = sortColors([1, 2, 0])

console.log(result)