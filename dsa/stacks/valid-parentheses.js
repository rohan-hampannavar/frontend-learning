/**
 * Valid Parentheses
 * Time: O(n) | Space: O(n)
 */
function isValid(s) {
  const stack = [], map = { ')':'(', '}':'{', ']':'[' };
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
