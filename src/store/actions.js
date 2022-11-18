export function increment() {
  console.log("1");
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
