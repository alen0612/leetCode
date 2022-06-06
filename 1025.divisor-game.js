/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  // using array
  //   let tmp = Number.NEGATIVE_INFINITY;
  //   let arr = new Array(n);
  //   arr.fill(tmp);
  //   arr[1] = false;
  //   arr[2] = true;
  //   arr[3] = false;
  //   const helper = (n) => {
  //     if (n === 1) return false;
  //     if (n === 2) return true;
  //     if (n === 3) return false;
  //     let canWin = false;
  //     for (var i = n - 1; i >= 1; i--) {
  //       if (n % i === 0) {
  //         if (arr[i] === tmp) arr[i] = helper(i);
  //         if (arr[i]) {
  //           canWin = true;
  //           break;
  //         }
  //       }
  //     }
  //     return canWin;
  //   };
  //   return helper(n);
};
// @lc code=end
