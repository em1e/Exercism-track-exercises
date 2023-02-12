// Given a moment, determine the moment that would be after a gigasecond has passed.
// A gigasecond is 10^9 (1,000,000,000) seconds.

const time = 1e12
export const gigasecond = someDate => new Date(someDate.getTime() + time);
