var isValid = function (s) {
  const map = new Map();
  let output = true;
  map.set("{", "}");
  map.set("[", "]");
  map.set("(", ")");
  const array = s.split("");

  let first = 0;
  let last = array.length - 1;
  if (s.length % 2 !== 0) {
    return false;
  }

  if (
    map.get(array[first]) !== array[last] &&
    map.get(array[first]) === array[last - 1]
  ) {
    return false;
  }
  for (i = array.length; i > 0; i--) {
  if (map.get(array[first]) === array[first + 1]) {
        // console.log("hello")
        array.splice(first + 1, 1);
        array.shift();

      first=0;
      last=array.length

        continue
      }
      

    

    while (first < last) {
        // console.log(first,"check first value")
        // console.log(last,"check last value")

     
      if (map.get(array[first]) === array[last]) {
       
         if(map.get(array[first])==undefined ){
            
          return false
      }
        console.log("hello")
        array.splice(last, 1);
        array.shift();
      }

      last -= 2;
    }
    first = 0;
    last = array.length - 1;
  }

  array.length > 0 ? (output = false) : (output = true);

  return output;
};

const result = isValid("[(){}[]({})]")

console.log(result, "check result");
