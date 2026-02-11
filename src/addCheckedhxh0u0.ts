import { isValidhxh0u0 } from './isValidhxh0u0';

/**
 * Adds two numbers after validating they are both finite.
 * Calls isValidhxh0u0 for validation, then returns a + b.
 *
 * @param a - First number to add
 * @param b - Second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number (from isValidhxh0u0)
 */
export function addCheckedhxh0u0(a: number, b: number): number {
  isValidhxh0u0(a, b);
  return a + b;
}
