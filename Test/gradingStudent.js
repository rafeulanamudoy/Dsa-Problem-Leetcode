//
function gradingStudents(grades) {
  const result = grades.map((grade) => {
    let array = [];
    const decimelformat = (grade * 10) / 100;

    const floatNumber = decimelformat.toFixed(1);
    const decimelDigit = floatNumber.toString().split(".");
    // console.log(Number(decimelDigit[1]));
    if (
      grade >= 38 &&
      Number(decimelDigit[1]) < 5 &&
      Number(decimelDigit[1]) != 0
    ) {
      // array.push(Math.round((grade * 10) / 100) * 10 + 5);
      let value = Math.round((grade * 10) / 100) * 10 + 5;
      value - grade < 3 ? array.push(value) : array.push(grade);

      //console.log(Math.round((grade * 10) / 100) * 10 + 5, "less then 5");
    } else if (grade >= 38 && Number(decimelDigit[1]) > 5) {
      //array.push(Math.round((grade * 10) / 100) * 10);
      //console.log(Math.round((grade * 10) / 100) * 10, "greater than 5");
      let value = Math.round((grade * 10) / 100) * 10;
      value - grade < 3 ? array.push(value) : array.push(grade);
    } else if (
      (grade >= 38 && Number(decimelDigit[1]) === 5) ||
      Number(decimelDigit[1]) === 0
    ) {
      array.push(grade);
      // console.log(grade, "equal");
    } else if (grade < 38) {
      array.push(grade);
    }
    return array;
  });
  console.log(result);
}

function gradingStudents2(grades) {
  let array = [];
  for (let grade of grades) {
    const decimelformat = (grade * 10) / 100;

    const floatNumber = decimelformat.toFixed(1);
    const decimelDigit = floatNumber.toString().split(".");
    // console.log(Number(decimelDigit[1]));
    if (
      grade >= 38 &&
      Number(decimelDigit[1]) < 5 &&
      Number(decimelDigit[1]) != 0
    ) {
      // array.push(Math.round((grade * 10) / 100) * 10 + 5);
      let value = Math.round((grade * 10) / 100) * 10 + 5;
      value - grade < 3 ? array.push(value) : array.push(grade);

      //console.log(Math.round((grade * 10) / 100) * 10 + 5, "less then 5");
    } else if (grade >= 38 && Number(decimelDigit[1]) > 5) {
      //array.push(Math.round((grade * 10) / 100) * 10);
      //console.log(Math.round((grade * 10) / 100) * 10, "greater than 5");
      let value = Math.round((grade * 10) / 100) * 10;
      value - grade < 3 ? array.push(value) : array.push(grade);
    } else if (
      (grade >= 38 && Number(decimelDigit[1]) === 5) ||
      Number(decimelDigit[1]) === 0
    ) {
      array.push(grade);
      // console.log(grade, "equal");
    } else if (grade < 38) {
      array.push(grade);
    }
  }
  return array;
}
//gradingStudents([73, 67, 38, 33, 90, 75]);
const result = gradingStudents2([73, 67, 40, 33]);
console.log(result);

console.log(Math.ceil(73 / 5));
