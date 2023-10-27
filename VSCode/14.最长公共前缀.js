/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 当字符串数组为空时，返回""
  if (strs.length === 0) return "";
  // 第一个字符串
  let ans = strs[0];
  debugger;
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // 字符串内搜索
    // 1. 内循环的j小于第一个字符串的长度
    // 2. 内循环的j小于第二个字符的长度
    for (; j < ans.length && j < strs[i].length; j++) {
      // 1. 比较第一个字符
      // 2. 比较第二个字符
      // 3. 直到第n个不相等的字符，
      if (ans[j] != strs[i][j]) break;
    }
    // 获得j的长度就是公共字符串的长度
    ans = ans.substr(0, j);
    // 如果退出都还没有公共字符串，那么返回""
    if (ans === "") return ans;
  }
  return ans;
};

let strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);

// @lc code=end
