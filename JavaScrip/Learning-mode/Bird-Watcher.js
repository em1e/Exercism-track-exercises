// Calculates the total bird count.
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i]
  }
  return totalBirds
}

// Calculates the total number of birds seen in a specific week.
export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0
  for (let i = week*7-7; i < week*7; i++) {
    totalBirds += birdsPerDay[i]
  }
  return totalBirds;
}

// Fixes the counting mistake by increasing the bird count by one for every second day.
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length - 1; index += 2) {
    birdsPerDay[index] = birdsPerDay[index] + 1
  }
  return birdsPerDay;
}
