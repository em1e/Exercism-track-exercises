// Determine whether the lasagna is done
export function cookingStatus(time) {
  if(time === 0) return 'Lasagna is done.';
  if(!time) return 'You forgot to set the timer.';
  return 'Not done, please wait.';
}


// Estimate the preparation time
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

// Compute the amounts of noodles and sauce needed
export function quantities (layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach(i => i === 'noodles' ? noodles += 50: '');
  layers.forEach(i => i === 'sauce' ? sauce += 0.2: '');                           
                                                          
  return { noodles, sauce };
}

// Add the secret ingredient
export function addSecretIngredient (friendsList, myList) {
   myList.push(friendsList[friendsList.length - 1]);
}

// Scale the recipe
export function scaleRecipe (recipe, portions = 2) {
  const result = {...recipe}
  const scale = portions / 2
  for (let i in recipe) {
    result[i] *= scale
  }
  return result
}
