/**
 * Longest Substring Without Repeating Characters
 * Sliding window - Time: O(n) | Space: O(n)
 */
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    if (seen.has(s[right])) left = Math.max(left, seen.get(s[right]) + 1);
    seen.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
