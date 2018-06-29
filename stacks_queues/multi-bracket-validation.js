'use strict';

function multiBracketValdiation(str) {
  let stack =[];
  let bracketTable = {
    '}':'{',
    ']':'[',
    ')':'(',
  };
  let openBracket = {
    '{': true,
    '[': true,
    '(': true,
  };

  for(let i = 0; i < str.length ; i++) {
    if (openBracket.hasOwnProperty(str[i])) {
      stack.push(str[i]);
      continue;
    }
    if (bracketTable[str[i]] === stack[stack.length-1]) {
      stack.shift();
    }
  }
  if(!stack.length) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = multiBracketValdiation;
