import { isValidhrx0le } from './isValidhrx0le';

/**
 * Subtracts two numbers after validating they are both finite.
 * Calls isValidhrx0le for validation, then returns a - b.
 *
 * @param a - First number (minuend)
 * @param b - Second number (subtrahend)
 * @returns The difference of a and b (a - b)
 * @throws {Error} If either parameter is not a finite number (from isValidhrx0le)
 */
export function subCheckedhrx0le(a: number, b: number): number {
  isValidhrx0le(a, b);
  return a - b;
}
