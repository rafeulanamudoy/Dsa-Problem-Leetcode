// var removeDuplicates = function (nums) {




//     let count = 1

//     for (let i = 0; i < nums.length; i++) {



//         if (nums[i] == nums[i + 1] ) {

//             count++



//             continue

//         }
//         else if(nums[i]!==nums[i+1]&& count>2){
//             const totalRemove=count-2
//             const  removeFrom=i-totalRemove


//             nums.splice(removeFrom,totalRemove)
//             count=1;
//             i=(i-totalRemove)
//             continue
//         }
//         else if (nums[i] !== nums[i + 1] && count <= 2) {
//             count = 1;
//             continue
//         }



//     }
//     return nums
// };

var removeDuplicates = function (nums) {

    let count = 1;
    let read = 0;


    for (let i = 0; i < nums.length; i++) {
           

    }


};



const result = removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3])


console.log(result)