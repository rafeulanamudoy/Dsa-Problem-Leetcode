// var topKFrequent = function (nums, k) {
//   let trackFrequency = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (trackFrequency.has(nums[i])) {
//       trackFrequency.set(nums[i], trackFrequency.get(nums[i] )+1);
//     } else {
//       trackFrequency.set(nums[i], 1);
//     }
//   }

//   console.log(trackFrequency)


//    const result=[...trackFrequency.entries() ].sort((a,b)=>b[1]-a[1]).slice(0,k).map((array)=>array[0])
//    return result

// };


var topKFrequent = function (nums, k) {
  const frequencyMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (frequencyMap.has(number)) {
      frequencyMap.set(number, frequencyMap.get(number) + 1);
    } else {
      frequencyMap.set(number, 1);
    }
  }


  const buckets = Array.from(
    { length: nums.length + 1 },
    () => []
  );


  for (const [number, frequency] of frequencyMap) {
    buckets[frequency].push(number);
  }


  const result = [];

  for (let frequency = buckets.length - 1; frequency >= 1; frequency--) {
    for (const number of buckets[frequency]) {
      result.push(number);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
};


const result = topKFrequent([1,2,1,2,1,2,3,1,3,2], 2);


console.log(result)