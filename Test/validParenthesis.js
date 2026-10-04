var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const need = { ')': '(', ']': '[', '}': '{' };
  const stack = [];

  for (const ch of s) {
    console.log(stack,"check stack")
    console.log(ch,"check character")
    if (ch in need) {
      console.log(ch in need,"if exist")
      if (stack.length === 0 || stack.pop() !== need[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
};

const result=isValid("([])")
console.log(result, "check result");
