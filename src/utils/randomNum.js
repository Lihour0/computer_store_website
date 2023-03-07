export function getRand(min, max) {
  return (Math.random() * (max - min) + min).toPrecision(2);
}
