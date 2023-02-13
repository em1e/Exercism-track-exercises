// Determines how long it takes to prepare a certain juice.

export function timeToMixJuice(name) {
  var t = 0;
  switch(name) {
    case 'Pure Strawberry Joy':
      t = 0.5;
      break;
    case 'Energizer':
      t = 1.5;
      break;
    case 'Green Garden':
      t = 1.5;
      break;
    case 'Tropical Island':
      t = 3;
      break;
    case 'All or Nothing':
      t = 5;
      break;
    default:
      t = 2.5;
      break;
  };
  return t;
}

// Calculates the number of limes that need to be cut
  export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let totalWedges = 0;
  let i = 0;
    while ((i < limes.length) && (totalWedges <= wedgesNeeded)){
    switch(limes[i]){
    case 'small':
      wedgesCut = 6
      break;
    case 'medium':
      wedgesCut = 8
      break;
    case 'large':
      wedgesCut = 10
      break;
    default:
      wedges = 0;
  }
  totalWedges += wedgesCut;
      if (wedgesNeeded !== 0) {
        i++;
      }
  } 
  return i;
}

// Determines which juices still need to be prepared after the end of the shift.
export function remainingOrders(timeLeft, orders) {
  let time = 0;
  let i = 0;
  let newArray = [];
  do {
    time = timeToMixJuice(orders[i])
    timeLeft = timeLeft - time
    i++;
    newArray = orders.slice(0,i)
    console.log(newArray)
  } while(timeLeft > 0)
  orders.splice(0, newArray.length)
  return orders
}
