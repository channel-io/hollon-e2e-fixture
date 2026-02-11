import { isValidhrx0le } from './isValidhrx0le';

/**
 * Adds two numbers after validating they are both finite.
 * Calls isValidhrx0le for validation, then returns a + b.
 *
 * @param a - First number to add
 * @param b - Second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number (from isValidhrx0le)
 */
export function addCheckedhrx0le(a: number, b: number): number {
  isValidhrx0le(a, b);
  return a + b;
}
