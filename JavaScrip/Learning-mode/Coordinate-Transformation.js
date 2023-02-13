// Create a function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.
export function translate2d(dx, dy) {
  return (x, y) => [dx + x, dy + y];
}

// Create a function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.
export function scale2d(sx, sy) {
  return (x, y) => [sx * x, sy * y];
}

// Create a composition function that returns a function that combines two functions to perform a repeatable transformation
export function composeTransform(f, g) {
  return function(x, y){
    let fResult = f(x, y);
    return g(fResult[0], fResult[1]); 
  }
}

// Return a function that memoizes the last result.  If the arguments are the same as the last call, then memoized result returned.
export function memoizeTransform(f) {
  let lastX, lastY, lastResult
  return (x, y) => {
    if (lastX === x && lastY === y) return lastResult;
    
    lastX = x
    lastY = y
    lastResult = f(x, y)
    
    return lastResult
  }
}
