/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 给定一个整数数组nums和一个整数目标值target，请你在该数组中找到和为目标值taret的那两个整数，并返回下标
 * 假设每种输入只会对应一个答案。但是数组中同一个元素在答案中不能重复出现。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length,
    maps = new Map();
  // 如果数组长度小于2，那么返回空
  if (len < 2) return [];
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    let diff = target - num;
    // 存在差值，成功返回
    if (maps.has(diff)) {
      return [maps.get(diff), i];
    }
    // 不存在就插入目前的数
    maps.set(num, i);
  }
  return [];
};

// @lc code=end
