
// Creates a new visitor.
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}

// Revokes a ticket for a visitor.
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

// Determines the status a ticket has in the ticket tracking object.
export function ticketStatus(tickets, ticketId) {
  const name = tickets[ticketId];

  switch (name) {
    case undefined:
      return 'unknown ticket id';
    case null:
      return 'not sold';
    default:
      return `sold to ${name}`
  }
}

// Determines the status a ticket has in the ticket tracking object and returns a simplified status message.
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

// Determines the version of the GTC that was signed by the visitor.
export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
