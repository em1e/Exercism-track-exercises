// Returns whether a number is even.
const isEven = n => n % 2 === 0;

// Returns whether a number is odd.
const isOdd = n => n % 2 === 1;


// Get the position (index) of the card in the given stack
export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

// Determine if the stack contains the card
export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

// Determine if each card is even
export function isEachCardEven(stack) {
  return stack.every(isEven);
}

// Check if stack contains odd-value card
export function doesStackIncludeOddCard(stack) {
  return stack.some(isOdd);
}

// Get the first odd card from the stack
export function getFirstOddCard(stack) {
  return stack.find(isOdd);
}

// Determine the position of the first card that is even
export function getFirstEvenCardPosition(stack) {
  return stack.findIndex(isEven);
}
