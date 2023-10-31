/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// new Map([[键，值]]) set(键，值)
// entries.has(键) 
// entries.get(键) 获取值

// has ),},] 后端括号就弹出，切栈内必须有值
// (,{,[ 前端括号推入

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  let entries = new Map([
    [')','('],
    ['}','{'],
    [']','[']]);
  let stack = []; 
  if(len === 0 || len % 2 !== 0) return false;
  for(let i of s) { 
    if(entries.has(i)){
      if(!stack.length || stack[stack.length -1] !== entries.get(i)){
        return false;
      }
      stack.pop();
    }else{
      stack.push(i);
    }
  }
  return !stack.length; 
};
// @lc code=end
