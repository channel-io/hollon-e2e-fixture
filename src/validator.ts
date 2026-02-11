export function validateInputhzy4eb(a: number, b: number): void {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Input must not be NaN');
  }
}
