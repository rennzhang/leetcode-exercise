/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   let num = 0;
//   const map = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };

//   for (let i = 0; i < s.length; i++) {
//     const el = s[i];
//       const nextEl = s[i + 1];
//       console.log(el,map[el]);
//     if (map[el + nextEl]) {
//       num += map[el + nextEl];
//       i++;
//     } else {
//       num += map[el];
//     }
//   }
//   console.log(num);
// };


var romanToInt = function (s) {
    let num = 0;
    const map = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };
  
    for (let i = 0; i < s.length; i++) {
      const el = s[i];
        const nextEl = s[i + 1];
      if (map[el] < map[nextEl]) {
        num -=  map[el]
      } else {
        num += map[el];
      }
    }
    console.log(num);
    return num
  };
romanToInt("LVIII");
