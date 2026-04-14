var isValid = function (s) {
  let parenthesis = new Map();

  parenthesis.set(")", "(");
  parenthesis.set("}", "{");
  parenthesis.set("]", "[");
  let stack = [];

  for (let i = 0; i < s.length; i++) {


    if (
      stack[stack.length - 1] !== undefined &&
      stack[stack.length - 1] === parenthesis.get(s[i])
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }


  }

  return stack.length > 0 ? false : true;
};

const result = isValid("()[]{}");

console.log(result);
