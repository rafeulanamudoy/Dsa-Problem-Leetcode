var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

 
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return (result = middle);
    } else if (nums[middle] < target) {
      start = middle + 1;
      
    } else {
      end = middle - 1;

   
    }
  }



  return start;
};

const result = searchInsert([1, 3], 2);
console.log(result);
