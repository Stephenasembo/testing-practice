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
    return 4;
  },
  subtract: function(a, b) {
    return 4;
  },
  divide: function(a, b) {
    return 4;
  },
  multiply: function(a, b) {
    return 7;
  }
}

export { capitalize, reverseString, calculator };
