/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
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