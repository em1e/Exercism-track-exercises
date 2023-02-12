// Given a year, report if it is a leap year.
// Leap year occurs: on every year that is evenly divisible by 4, except every year that is evenly divisible by 100, unless the year is also evenly

export const isLeap = (year) => {
  if (year%4 === 0 && year%100 === 0 && year%400 === 0) {
    return true;
  } else if (year%4 === 0 && year%100 === 0 && !year%400 === 0){
    return false;
  } else if (year%4 === 0 && !year%100 === 0 && !year%400 === 0){
    return true;
  } else {
    return false;
  };
};
