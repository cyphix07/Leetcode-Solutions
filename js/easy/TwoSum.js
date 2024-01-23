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

/* Runtime
95
ms
Beats
30.83%
of users with JavaScript




Memory
49.13
MB
Beats
5.03%
of users with JavaScript
*/
