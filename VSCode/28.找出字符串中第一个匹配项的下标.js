/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const llen = haystack.length,slen = needle.length;
    for(let i = 0;i+slen <= llen;i++){
        let flag = true;
        for(let j =0;j<slen;j++){
            if(haystack[i+j] != needle[j]){
                flag = false;
                break;
            }
        }
        if(flag){return i};
    }
    return -1;  
};
// @lc code=end

let haystack = 'sadbutsad',needle='sad';
console.log(strStr(haystack,needle))

// 双指针 


