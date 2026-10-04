const trackOver = (over, ball) => {
  let result;
  let tamimRun = 0;
  let sakibRun = 0;
  let tamimStrike = true;
  let sakibStrike = false;
  for (let i = 0; i < ball.length; i++) {
    if (ball[i] % 2 === 0 && tamimStrike && !sakibStrike) {
      console.log("in if even loop when tamim strike");

      tamimRun = tamimRun + ball[i];
      continue;
    } else if (ball[i] % 2 !== 0 && tamimStrike && !sakibStrike) {
      console.log("in odd loop when tamim strike");
      tamimRun = tamimRun + ball[i];

      if ((i +1 ) % 6 !== 0) {
        tamimStrike = false;
        sakibStrike = true;
      }

      continue;
    } else if (ball[i] % 2 === 0 && sakibStrike && !tamimStrike) {
      console.log("in even loop when sakib strike");
      sakibRun = sakibRun + ball[i];
      continue;
    } else if (ball[i] % 2 !== 0 && sakibStrike && !tamimStrike) {
      console.log("in odd loop when sakib strike");
      sakibRun = sakibRun + ball[i];
      if ((i +1 ) % 6 !== 0) {
        console.log(i + (1 % 6) !== 0, i + 1, "sakib strike change");
        tamimStrike = true;
        sakibStrike = false;
      }

      continue;
    }
  }

  console.log(tamimRun, sakibRun);
  tamimRun < sakibRun ? (result = "happy") : result="sad";

  return result;
};

const result = trackOver(2, [1, 4, 3, 6, 2, 1, 6, 4, 1, 6, 0, 2]);

console.log(result);
