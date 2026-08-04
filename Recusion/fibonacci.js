const fibonacci = (number) => {
  if (number === 1) {
    return 1;
  }
  if (number === 0) {
    return 0;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
};

let output = fibonacci(5);
console.log(output);

// function c() {
//   console.log("C starts");
//   return "Hello";
// }

// function b() {
//   console.log("B starts");
//   return c();
// }

// function a() {
//   console.log("A starts");
//   return b();
// }

// const result = a();
// console.log(result);
