// var findMaxAverage = function (nums, k) {
//     let maximumAverage=-Infinity



//     let leftPointer = 0
//     let rightPointer = k


//     while (rightPointer <= nums.length) {

//         let total = 0

       

//         for (let i = leftPointer; i < rightPointer; i++) {
              
//             total = total + nums[i]

//         }

   
//          const localAverage=total / k

//         maximumAverage = Math.max(maximumAverage, localAverage)


      

//         rightPointer++
      
//         leftPointer++
//     }



//     return maximumAverage
// };





//optimize sliding window 
// var findMaxAverage = function (nums, k) {
//     let total = 0;


//     for (let i = 0; i < k; i++) {
//         total += nums[i];
//     }

//     let maximumAverage = total / k;

//     let leftPointer = 0;
//     let rightPointer = k;

//     while (rightPointer < nums.length) {
  
//         total -= nums[leftPointer];

  
//         total += nums[rightPointer];

//         const localAverage = total / k;
//         maximumAverage = Math.max(maximumAverage, localAverage);

//         leftPointer++;
//         rightPointer++;
//     }

//     return maximumAverage;
// };
//kadanes algo
var findMaxAverage = function (nums, k) {
    
};

const result = findMaxAverage([4,0,4,3,3], 5)

console.log(result,"check rsult")