/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (const token of tokens) {
    if (Object.keys(operators).includes(token)) {
      const op1 = parseInt(stack.pop());
      const op2 = parseInt(stack.pop());
      stack.push(operators[token](op2, op1));
    } else {
      stack.push(token);
    }
  }

  return stack.pop();
};
