function getSecondLargest(nums) {
  const maxNumber = Math.max(...nums);
  const result = nums.filter((num) => {
    return num < maxNumber;
  });
  return Math.max(...result);
}

const result = getSecondLargest([20, 60, 60, 100, 120, 120, 100]);

console.log(result);
