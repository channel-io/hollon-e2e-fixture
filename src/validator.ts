/**
 * Validates that both parameters are finite numbers.
 *
 * @param a - The first parameter to validate
 * @param b - The second parameter to validate
 * @throws {Error} If either parameter is not a finite number (rejects NaN, Infinity, non-numbers)
 *
 * @example
 * validateInputhyonkk(1, 2); // No error thrown
 * validateInputhyonkk(NaN, 5); // Throws Error: "First parameter must be a finite number..."
 * validateInputhyonkk(5, Infinity); // Throws Error: "Second parameter must be a finite number..."
 */
export function validateInputhyonkk(a: number, b: number): void {
  if (!Number.isFinite(a)) {
    throw new Error(
      `First parameter must be a finite number, but got: ${
        Number.isNaN(a) ? 'NaN' : a
      }`
    );
  }
  if (!Number.isFinite(b)) {
    throw new Error(
      `Second parameter must be a finite number, but got: ${
        Number.isNaN(b) ? 'NaN' : b
      }`
    );
  }
}
