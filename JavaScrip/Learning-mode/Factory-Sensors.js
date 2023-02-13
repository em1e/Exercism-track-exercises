export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

// Check if the humidity level is not too high.
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70){
    let err = new Error('Humidity percentage is too high');
    throw err;
  }
  return undefined;
}

// Check if the temperature is not too high.
export function reportOverheating(temperature) {
  if(temperature === null){
    throw new ArgumentError();
  } else if(temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

// Triggers the needed action depending on the result of the machine check.
export function monitorTheMachine(actions) {
  try {
    actions.check()
  } catch (error) {
    if(error instanceof ArgumentError){
      actions.alertDeadSensor();
    } else if(error instanceof OverheatingError){
      if(error.temperature > 600){
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      throw error;
    }
  }
}
