import { isValidhxh0u0 } from './isValidhxh0u0';

/**
 * Subtracts two numbers after validating they are both finite.
 * Calls isValidhxh0u0 for validation, then returns a - b.
 *
 * @param a - First number (minuend)
 * @param b - Second number (subtrahend)
 * @returns The difference of a and b (a - b)
 * @throws {Error} If either parameter is not a finite number (from isValidhxh0u0)
 */
export function subCheckedhxh0u0(a: number, b: number): number {
  isValidhxh0u0(a, b);
  return a - b;
}
