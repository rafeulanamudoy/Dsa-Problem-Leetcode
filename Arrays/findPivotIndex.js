var pivotIndex = function (nums) {
  let pointer = 0;
  let leftSum = 0;
  let rightSum = 0;
  let result = -1;

  while (pointer !== nums.length ) {
    for (let i = pointer + 1; i < nums.length; i++) {

  
      rightSum = rightSum + nums[i];
    
    }

    for (let i = pointer - 1; i >= 0; i--) {

      leftSum = leftSum + nums[i];
    }

         console.log(leftSum,rightSum,pointer,"check value")

    if (leftSum == rightSum) {
   
      result = pointer;
      break;
    }
    leftSum = 0;
    rightSum = 0;
    pointer++;
  }
  return result;
};

const result = pivotIndex([-1,-1,0,1,1,0]);

console.log(result);
