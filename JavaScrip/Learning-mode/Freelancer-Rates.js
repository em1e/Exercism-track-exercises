// The day rate, given a rate per hour
export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

// Calculates the number of days in a budget, rounded down
export function daysInBudget(budget, ratePerHour) {
  const dayRate = ratePerHour*8;
  return Math.floor(budget / dayRate);
}

//Calculates the discounted rate for large projects, rounded up
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
 const billableDaysInMonth = 22;
  const dayRate = ratePerHour * 8;
  const dayRateDiscount = dayRate * discount;
  const remainingDays = numDays % billableDaysInMonth;
  const remainingDaysPrice = remainingDays * dayRate;
  const discountedDays = numDays - remainingDays;
  const discountedDaysPrice = discountedDays * (dayRate - dayRateDiscount);

  return Math.ceil(discountedDaysPrice + remainingDaysPrice);
}
