// var sortColors = function (nums) {

//     let read = 0
//     let write=1

//     while (read<nums.length ) {

//         if (nums[read] > nums[write]) {
//                console.log("swap")
//             let temp=nums[read]
//             nums[read] = nums[write]

//             nums[write]=temp;
//             read++
//         }

//         write++

//     }

//     return nums
// };

var sortColors = function (nums) {
  let numsMap = new Map();

  for (i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
    } else {
      numsMap.set(nums[i], 1);
    }
  }

const sortedNumsFrequency = [];

for (let key = 0; key <= 2; key++) {
  if (numsMap.has(key)) {
    sortedNumsFrequency.push([key, numsMap.get(key)]);
  }
}

  nums.length=0;

  for (let i = 0; i < sortedNumsFrequency.length; i++) {
    for (let j = 0; j < sortedNumsFrequency[i][1]; j++) {
      nums.push(sortedNumsFrequency[i][0]);
    }
  }

  return nums;
};
const result = sortColors([2, 0, 2, 1, 1, 0]);

console.log(result, "check result");
