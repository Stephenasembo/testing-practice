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

const lowerCaseLetters = [...'abcdefghijklmnopqrstuvwxyz'];
const upperCaseLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function caesarCipher(string, key) {
  const stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i += 1) {
    let letter = stringArr[i];
    let index = lowerCaseLetters.findIndex(alphabet => letter === alphabet);
    // Check if letter is lowercase
    if (index !== -1) {
      let newLetterIndex = index + key;
      stringArr[i] = lowerCaseLetters[newLetterIndex];
    } else if (index === -1) {
      // If it is not lowercase look in the uppercase array
      index = upperCaseLetters.findIndex(alphabet => letter === alphabet);
      if (index !== -1) {
        let newLetterIndex = index + key;
        stringArr[i] = upperCaseLetters[newLetterIndex];
      } else {
          stringArr[i] = stringArr[i];
      }
    }
  }
  return stringArr.join('');
}

export { capitalize, reverseString, calculator, caesarCipher };
