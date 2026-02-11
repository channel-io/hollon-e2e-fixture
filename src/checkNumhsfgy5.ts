/**
 * Validates that both parameters are finite numbers.
 * Throws an Error if either parameter is not a finite number (including NaN, Infinity, or non-numeric types).
 * @param a - The first parameter to validate
 * @param b - The second parameter to validate
 * @throws {Error} If either parameter is not a finite number
 */
export function checkNumhsfgy5(a: unknown, b: unknown): void {
  if (!Number.isFinite(a)) {
    throw new Error(`Parameter a is not a finite number: ${a}`);
  }
  if (!Number.isFinite(b)) {
    throw new Error(`Parameter b is not a finite number: ${b}`);
  }
}
