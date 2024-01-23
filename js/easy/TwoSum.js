/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let j = 0; j < nums.length; j++) {
    let x = nums[j];
    for (let i = j + 1; i < nums.length; i++) {
      if (target - x === nums[i]) {
        let result = [j, i];
        return result;
      }
    }
  }
};
