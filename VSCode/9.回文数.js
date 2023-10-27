/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数 2022.9.28
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 如果是0 是回文数
  if (x === 0) return true;
  // 如果小于0，或者各位为0 不是回文数
  if (x < 0 || x % 10 === 0) return false;
  let y = 0,
    temp = x;
  while (x !== 0) {
    let rem = x % 10; // 1. 取余数
    x = parseInt(x / 10); // 2. 降位
    y = y * 10 + rem; // 3. 升位
  }
  // 原数和倒数相同
  if (temp === y) return true;
  else {
    return false;
  }
};
// @lc code=end
