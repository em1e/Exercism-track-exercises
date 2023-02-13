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
  for(let i=0; i < stack.length; i++){
    if(stack[i] % 2 !== 0) return false;
  }
  return true;
}

// Check if stack contains odd-value card
export function doesStackIncludeOddCard(stack) {
  for(let i=0; i < stack.length; i++){
    if(stack[i] % 2 !== 0) return true;
  }
  return false;
}

// Get the first odd card from the stack
export function getFirstOddCard(stack) {
  for(let i=0; i < stack.length; i++){
    if(stack[i] % 2 !== 0) return stack[i];
  }
  return undefined;
}

// Determine the position of the first card that is even
export function getFirstEvenCardPosition(stack) {
  for(let i=0; i < stack.length; i++){
    if(stack[i] % 2 === 0) return i;
  }
  return -1;
}
