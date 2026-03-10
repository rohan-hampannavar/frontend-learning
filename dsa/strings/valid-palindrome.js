/**
 * Valid Palindrome
 * Time: O(n) | Space: O(n)
 */
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
