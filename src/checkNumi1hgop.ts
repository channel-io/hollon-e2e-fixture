export function checkNumi1hgop(a: unknown, b: unknown): void {
  if (typeof a !== 'number' || !Number.isFinite(a)) {
    throw new Error('Invalid input: a must be a finite number');
  }
  if (typeof b !== 'number' || !Number.isFinite(b)) {
    throw new Error('Invalid input: b must be a finite number');
  }
}
