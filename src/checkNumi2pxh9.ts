/**
 * Validates that both arguments are finite numbers.
 * @param a - First value to check
 * @param b - Second value to check
 * @throws {Error} If either argument is not a finite number
 */
export function checkNumi2pxh9(a: unknown, b: unknown): void {
  if (typeof a !== 'number' || !Number.isFinite(a)) {
    throw new Error('First argument must be a finite number');
  }
  if (typeof b !== 'number' || !Number.isFinite(b)) {
    throw new Error('Second argument must be a finite number');
  }
}
