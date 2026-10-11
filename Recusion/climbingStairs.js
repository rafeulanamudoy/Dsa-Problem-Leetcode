var climbStairs = function(n) {

    


    if(n==1){
        return 1
    }

   else   if(n===2){
        return 0
    }

    
     return climbStairs(n-1)+climbStairs(n-2)
};





const result=climbStairs(3)

console.log(result)