var guessNumber = function (n) {
  let start = 1;
  let end = n;
  if(n==1){
    return 1
  }
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    console.log(middle, "check middle value");
    const output = guess(middle);

    if (output === 0) {
      return middle;
    } else if (output === -1) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
};

const guess = (pick) => {

  let matched = 1;
  if (pick == matched) {
    return 0;
  }
  if (pick > matched) {
    return -1;
  }
  if (pick < matched) {
    return 1;
  }
};

let result = guessNumber(3);
console.log(result);
