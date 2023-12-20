// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {P
//   if (x < 0) return false;

//   let s = x.toString();
//   let m = Math.ceil(s.length / 2) - 1;

//   for (let i = 0; i <= m; i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (revertedNumber < x) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return x == revertedNumber || parseInt(revertedNumber/10) == x
};
console.log(isPalindrome(121));
