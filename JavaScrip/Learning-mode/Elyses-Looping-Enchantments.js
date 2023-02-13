// Determine how many cards of a certain type there are in the deck
export function cardTypeCheck(stack, card) {
  let result = stack.filter(e => e === card).length;
  return result;
}

// Determine how many cards are odd or even
export function determineOddEvenCards(stack, type) {
  return type === true ? stack.filter(e => e % 2 === 0).length : stack.filter(e => e % 2 !== 0).length;
}
