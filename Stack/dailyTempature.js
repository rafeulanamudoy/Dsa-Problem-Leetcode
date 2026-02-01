var dailyTemperatures = function (temperatures) {
  let array = [];
  let temparyValueHolder = [];
  let pointer = 0;

  let count = 1;

  while (pointer <= temperatures.length - 1) {
    let i = pointer + 1;
    for (i; i < temperatures.length - 1; i++) {
      if (temperatures[pointer] > temperatures[i]) {
        // temparyValueHolder.push(temperatures[i]);
        count++;
      } else if (temperatures[pointer] < temperatures[i]) {
        array.push(count);
        pointer++;
        break;
      } else {
        array.push(0);
        pointer++
        break;
      }
    }
  }
  return array;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

const result=dailyTemperatures(temperatures);
console.log(result)

