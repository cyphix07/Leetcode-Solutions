while (nums.includes(val)) {
  let index = nums.indexOf(val);
  nums.splice(index, 1); // Remove one element at the found index
}

return nums.length;
