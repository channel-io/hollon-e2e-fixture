import { validateInputhosa00 } from './validator';

/**
 * Safely adds two numbers after validating inputs.
 * Throws an Error if either input is NaN.
 * 
 * @param a - First number to add
 * @param b - Second number to add
 * @returns The sum of a and b
 * @throws {Error} When either input is NaN
 */
export function addSafehosa00(a: number, b: number): number {
  validateInputhosa00(a, b);
  return a + b;
}
