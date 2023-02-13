// Respond with the correct character, given the line of the poem, if this were said at the front door.
export function frontDoorResponse(line) {
  return line[0];
}

//Format the password for the front-door, given the response letters.
function capitalize(word) {
  return word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
}
export function frontDoorPassword(word) {
  return capitalize(word);
}

//Respond with the correct character, given the line of the poem, if this were said at the back door.
export function backDoorResponse(line) {
  line = line.trim();
  return line[line.length - 1];
}

// Format the password for the back door, given the responseletters.
export function backDoorPassword(word) {
  return capitalize(word) + ", please";
}
