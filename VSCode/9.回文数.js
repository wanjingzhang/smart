/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * 0是回文数吗？
 * 颠倒过来的数和原数相等 即为回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if(x === 0)return true;
  if( x<0  || (x % 10 ===0))return false;
  let rem=0,y=x;
  while(y>0){
      rem = rem * 10 + y%10;
      y = ~~(y/10) 
  }

  if(x === rem)return true;
  else return false; 
};
// @lc code=end
