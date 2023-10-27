/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let symbolValues = new Map();
  symbolValues.set("I", 1);
  symbolValues.set("V", 5);
  symbolValues.set("X", 10);
  symbolValues.set("L", 50);
  symbolValues.set("C", 100);
  symbolValues.set("D", 500);
  symbolValues.set("M", 1000);
  let len = s.length,
    sum = 0,
    value = 0;
  for (let i = 0; i < len; i++) {
    value = symbolValues.get(s[i]);
    debugger;
    // 1. 判断是否是最后一个字符
    // 2. 是否小于后面一个数
    if (i < len - 1 && value < symbolValues.get(s[i + 1])) {
      sum -= value;
    } else {
      sum += value;
    }
  }
  return sum;
};
// @lc code=end
