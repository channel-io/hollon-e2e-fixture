/**
 * Validates that both parameters are finite numbers.
 *
 * @param a - The first parameter to validate
 * @param b - The second parameter to validate
 * @throws {Error} If either parameter is not a finite number (rejects NaN, Infinity, non-numbers)
 *
 * @example
 * isValidhy778v(1, 2); // No error thrown
 * isValidhy778v(NaN, 5); // Throws Error: "First parameter must be a finite number..."
 */
export function isValidhy778v(a: unknown, b: unknown): void {
  if (!Number.isFinite(a)) {
    throw new Error(
      `First parameter must be a finite number, but got: ${
        typeof a === 'number' ? (Number.isNaN(a) ? 'NaN' : a) : JSON.stringify(a)
      }`
    );
  }
  if (!Number.isFinite(b)) {
    throw new Error(
      `Second parameter must be a finite number, but got: ${
        typeof b === 'number' ? (Number.isNaN(b) ? 'NaN' : b) : JSON.stringify(b)
      }`
    );
  }
}
