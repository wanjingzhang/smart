/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let slow=0,fast=0;
    while(fast < len){
        if(nums[fast] !== val){
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};
// @lc code=end

console.log(removeElement([0,1,1,1,2,2,3,4,5],1));
// 双指针

