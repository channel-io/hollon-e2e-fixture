/**
 * Validates two numeric inputs.
 * Throws an Error if either input is NaN.
 * 
 * @param a - First numeric input
 * @param b - Second numeric input
 * @throws {Error} When either input is NaN
 */
export function validateInputhosa00(a: number, b: number): void {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Input values must be valid numbers (not NaN)');
  }
}
