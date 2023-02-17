// Build a sign that includes both of the parameters.
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

// Build a birthday sign that conditionally formats the return string.
export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;
}

// Build a graduation sign that includes multiple lines.
export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

// Determine cost based on each character of sign parameter that builds the template string that includes the currency parameter.
export function costOf(sign, currency) {
  return `Your sign costs ${(sign.length * 2) + 20}.00 ${currency}.`;
}
