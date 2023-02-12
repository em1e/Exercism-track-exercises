// Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.

const shiftLetters = (chi, per, key) => 
  String.fromCharCode((chi.charCodeAt(0) - per + key) % 26 + per)

export const rotate = (msg, key) => 
    msg.replace (/[a-z]/g, chiper => shiftLetters (chiper, 'a'.charCodeAt(0), key)).replace (/[A-Z]/g, chiper => shiftLetters (chiper, 'A'.charCodeAt(0), key))
