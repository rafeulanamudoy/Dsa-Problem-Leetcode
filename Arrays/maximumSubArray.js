var maxSubArray = function (nums) {
  // let maxSum = -Infinity;

  // for (let i = 0; i < nums.length; i++) {
  //   let sum = 0;
  //   for (j = i; j < nums.length; j++) {
  //     sum = sum + nums[j];

  //     maxSum = Math.max(maxSum, sum);
  //   }
  // }
  // return maxSum;

  //kadanes algo
     let localMax = nums[0];
  let globalMax = nums[0]

  for (let i = 1; i < nums.length; i++) {

    localMax = Math.max(nums[i], localMax + nums[i])
    if (globalMax < localMax) {
      globalMax = localMax
    }
  }
  return globalMax

};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(result);
