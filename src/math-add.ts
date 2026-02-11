import { validateInputhyonkk } from './validator';

/**
 * Safely adds two numbers after validating inputs.
 *
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number (delegates to validateInputhyonkk)
 *
 * @example
 * addSafehyonkk(2, 3); // Returns 5
 * addSafehyonkk(-2, 5); // Returns 3
 * addSafehyonkk(NaN, 5); // Throws Error
 */
export function addSafehyonkk(a: number, b: number): number {
  validateInputhyonkk(a, b);
  return a + b;
}
