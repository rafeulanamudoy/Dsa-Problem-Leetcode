var majorityElement = function(nums) {
    
    let result = nums[0];
    let track = 1;
    let min = 0
    let pointer = 0
    nums.sort()

    for (var i = pointer; i < nums.length; i++) {
        let broke = false
   
      
        for (var j = pointer + 1; j < nums.length; j++) {




            if (nums[i] !== nums[j]) {
           
                if (track > min) {
                    min = track;

                    result = nums[i]
                }

                pointer = j
                track = 1
                i = pointer - 1
                    broke = true
               
                break
            }
            track = track + 1
        
     
        }

    
        if (!broke) {

            if (track > min) {

                result = nums[i]
            }
            break
        }
     
    }
    return result
};


//accepet but time limit exeed

// var majorityElement = function (nums) {
//   let result = nums[0];
//   let track = 1;
//   let maxValue=1

//   for (let i = 0; i < nums.length; i++) {
//     for (let j =0; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       }

//       if (nums[i] === nums[j]) {
//         track = track + 1;
//       }

//     }

//    if(Math.max(track,maxValue)===track){
//     result=nums[i]
//     maxValue=track

//    }
//     track=1
//   }

//   return result;
// };

// const result = majorityElement([5,5,5,5,5,5,5,5,2,2,1,1,1,2,2]);
