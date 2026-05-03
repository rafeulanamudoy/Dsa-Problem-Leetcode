var search = function (nums, target) {
  let start = 0;
  let end = nums.length-1;
  const divideAndConquer = (start, end, target, array) => {
    if(start>end){
    return -1
    }

    let middle = Math.floor((start + end) / 2);

 
   
      if (array[middle] === target) {

        return middle;
      
      
      } else if (array[middle] < target) {
          return divideAndConquer(
          middle+1,
          array.length - 1,

          target,
          array,
        );
    
       
      } else  {
        return divideAndConquer(start, middle-1, target, array);
      
      }
     
    }


  
  return divideAndConquer(start, end, target, nums);
};

const result = search([-1,0,3,5,9,12], 2);
console.log(result,"final resutl")
