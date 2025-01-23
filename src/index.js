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

export { capitalize, reverseString };
