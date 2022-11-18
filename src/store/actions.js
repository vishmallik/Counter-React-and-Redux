export function increment() {
  return {
    type: "inc",
  };
}
export function decrement() {
  return {
    type: "dec",
  };
}
export function reset() {
  return {
    type: "reset",
  };
}
export function steps(step) {
  return {
    type: "changeSteps",
    payload: step,
  };
}

export function limit(max) {
  return {
    type: "changeLimit",
    payload: max,
  };
}
