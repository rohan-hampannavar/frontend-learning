/**
 * Maximum Subarray - Kadane's Algorithm
 * Time: O(n) | Space: O(1)
 * At each step, decide whether to extend the subarray or start fresh.
 */
function maxSubArray(nums) {
  let maxSum = nums[0], curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
