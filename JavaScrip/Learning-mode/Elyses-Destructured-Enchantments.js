// Get the first card in the given deck
export function getFirstCard(deck) {
  return deck.shift();
}

// Get the second card in the given deck
export function getSecondCard(deck) {
  return deck.slice(1, 2)[0];
}

// Switch the position of the first two cards in the given deck
export function swapTopTwoCards(deck) {
  const second = deck.splice(1, 1)[0];
  deck.unshift(second);

  return deck;
}

// Put the top card of the given deck into a separate discard pile
export function discardTopCard(deck) {
  const [top, ...rest] = deck;
  return [top, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

// Insert face cards into the given deck
export function insertFaceCards(deck) {
  if (deck.length === 0) { 
    return [undefined, ...FACE_CARDS];
  }
  else {
    deck.splice(1, 0, ...FACE_CARDS);
    return deck;
  }
}
