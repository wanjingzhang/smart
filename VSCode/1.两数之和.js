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
 * 获取数组里相加为target的下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */ 

// 暴力
var twoSum = function (nums, target) {
  let len, maps= new Map(), num=0,diff=0;
  len = nums.length;
  // 当前数组必须大于两个元素
  if(len < 2) return [];
  // 暴力算法：时间复杂度为O(n2)
  for(let i=0;i<len-1;i++){
      for(let j = 1;j<len;j++){
          if(nums[i] + nums[j] === target){
              return [i,j];
          }
      }
  }
  return []
};

// var nums = [3,2,4],target=6;
// var result = twoSum(nums,target);
// console.log(result);


// 哈希
// @lc code=start
var twoSum = function (nums, target) {
  let len, maps= new Map(), num=0,diff=0;
  len = nums.length;
  // 当前数组必须大于两个元素
  if(len < 2) return [];
  // 采用哈希算法：把数组映射到Map, 时间复杂度降为O(1)
  for(let i=0;i<len;i++){
      num = nums[i];
      diff = target - num;
      if(maps.has(diff)){
          return [maps.get(diff),i]
      }
      maps.set(num,i)
  }
};  
// @lc code=end


// var nums = [2,7,11,15],target=9;
// var result = twoSum(nums,target);
// console.log(result);
