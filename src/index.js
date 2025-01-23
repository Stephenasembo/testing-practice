function capitalize(string) {
  const stringArr = string.split('');
  stringArr[0] = stringArr[0].toUpperCase();
  return stringArr.join('');
}

function reverseString(string) {
  const stringArr = string.split('');
  const reversedArr = stringArr.reverse();
  return reversedArr.join('');
}

const calculator = {
  sum: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  }
}

export { capitalize, reverseString, calculator };
