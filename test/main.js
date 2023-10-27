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


var nums = [2,7,11,15],target=9;
var result = twoSum(nums,target);
console.log(result);
