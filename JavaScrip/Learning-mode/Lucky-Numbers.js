// Calculates the sum of the two input arrays.
export function twoSum(array1, array2) {
  return +array1.join('') + +array2.join('');
}

// Checks whether a number is a palindrome.
export function luckyNumber(value) {
  return String(value) === String(value).split("").reverse().join("");
}

// Determines the error message that should be shown to the user for the given input value.
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }
  return Number(input) ? '' : 'Must be a number besides 0';
}
