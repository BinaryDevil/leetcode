/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i = 0
  var num
  var count
  while (nums[i] !== undefined) {
    if (nums[i] !== num) {
      num = nums[i]
      count = 1
      i++
    } else {
      if (count < 2) {
        count++
        i++
      } else {
        nums.splice(i, 1)
      }
    }
  }

  return nums.length
}
