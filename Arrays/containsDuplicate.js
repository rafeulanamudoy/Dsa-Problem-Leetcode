var containsDuplicate = function (nums) {
    // let pointer = 0;



    // let rightPointer = pointer + 1
    // while (nums.length>=rightPointer && pointer < rightPointer) {


    //     for (rightPointer; rightPointer < nums.length; rightPointer++) {

    //         if (nums[pointer] === nums[rightPointer]) {
    //             return true
    //         }
    //     }

    //     pointer=pointer+1
    //     rightPointer = pointer + 1
    // }


    // return false

    //optimize solution 

    if (nums.length <= 1) return false;

    let set = new Set(nums);
    return nums.length !== set.size;



};


const result = containsDuplicate([7, 5, 3, 2, 1, 4])

console.log(result)