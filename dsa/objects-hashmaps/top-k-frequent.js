/**
 * Top K Frequent Elements
 * Time: O(n log n) | Space: O(n)
 */
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  return [...freq.entries()].sort((a,b) => b[1]-a[1]).slice(0,k).map(e => e[0]);
}
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1, 2]
