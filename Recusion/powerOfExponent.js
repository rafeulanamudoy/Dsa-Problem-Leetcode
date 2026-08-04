const solution = (x, n) => {
  if (n >= 0) {


    if (n === 0) {
      return 1;
    }
    return x * solution(x, n - 1);
  } else {
    if (n === 0) {
      return 1;
    }
    return 1/(solution(x, -n))
  }
};

const result = solution(2, -3);

console.log(result);
