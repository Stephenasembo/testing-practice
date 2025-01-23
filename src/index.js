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

function caesarCipher(string, key) {
  const stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i += 1) {
    let letter = stringArr[i].charCodeAt(0);
    letter += key;
    stringArr[i] = String.fromCharCode(letter);
  }
  return stringArr.join('');
}

export { capitalize, reverseString, calculator, caesarCipher };
