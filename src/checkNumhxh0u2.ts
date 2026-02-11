/**
 * Validates that both parameters are finite numbers.
 * Throws an Error if either parameter is not a finite number.
 *
 * @param a - First value to validate
 * @param b - Second value to validate
 * @throws {Error} If either parameter is not a finite number
 */
export function checkNumhxh0u2(a: unknown, b: unknown): void {
  if (!Number.isFinite(a)) {
    throw new Error(`First parameter must be a finite number, but got: ${typeof a === 'number' ? (Number.isNaN(a) ? 'NaN' : a) : JSON.stringify(a)}`);
  }
  if (!Number.isFinite(b)) {
    throw new Error(`Second parameter must be a finite number, but got: ${typeof b === 'number' ? (Number.isNaN(b) ? 'NaN' : b) : JSON.stringify(b)}`);
  }
}
