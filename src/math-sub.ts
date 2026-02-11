import { validateInputhyonkk } from './validator';

/**
 * Safely subtracts two numbers after validating inputs.
 *
 * @param a - The first number (minuend)
 * @param b - The second number (subtrahend)
 * @returns The difference of a minus b
 * @throws {Error} If either parameter is not a finite number (delegates to validateInputhyonkk)
 *
 * @example
 * subtractSafehyonkk(5, 3); // Returns 2
 * subtractSafehyonkk(-2, 5); // Returns -7
 * subtractSafehyonkk(Infinity, 5); // Throws Error
 */
export function subtractSafehyonkk(a: number, b: number): number {
  validateInputhyonkk(a, b);
  return a - b;
}
