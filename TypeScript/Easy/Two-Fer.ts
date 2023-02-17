// Given a name, return a string with the message: "One for name, one for me."
// However, if the name is missing, return the string: "One for you, one for me."

export function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
}
