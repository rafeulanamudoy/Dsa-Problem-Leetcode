var topKFrequent = function (nums, k) {
  let trackFrequency = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (trackFrequency.has(nums[i])) {
      trackFrequency.set(nums[i], trackFrequency.get(nums[i] )+1);
    } else {
      trackFrequency.set(nums[i], 1);
    }
  }




   const result=[...trackFrequency.entries() ].sort((a,b)=>b[1]-a[1]).slice(0,k).map((array)=>array[0])
   return result

};

const result = topKFrequent([1,2,1,2,1,2,3,1,3,2], 2);


console.log(result)