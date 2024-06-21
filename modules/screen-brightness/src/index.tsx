const ScreenBrightness = require('./NativeScreenBrightness').default;

export function multiply(a: number, b: number): number {
  return ScreenBrightness.multiply(a, b);
}

export function minus() {
  return;
}

export function add() {
  return;
}
