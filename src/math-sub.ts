import { validateInputhosa00 } from './validator';

/**
 * Safely subtracts two numbers after validating inputs.
 * Throws an Error if either input is NaN.
 * 
 * @param a - First number (minuend)
 * @param b - Second number (subtrahend)
 * @returns The difference of a and b
 * @throws {Error} When either input is NaN
 */
export function subtractSafehosa00(a: number, b: number): number {
  validateInputhosa00(a, b);
  return a - b;
}
