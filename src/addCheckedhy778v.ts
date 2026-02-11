import { isValidhy778v } from './isValidhy778v';

/**
 * Adds two numbers after validating that both are finite numbers.
 *
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number
 *
 * @example
 * addCheckedhy778v(5, 3); // Returns 8
 * addCheckedhy778v(1.5, 2.5); // Returns 4
 * addCheckedhy778v('5', 3); // Throws Error
 */
export function addCheckedhy778v(a: unknown, b: unknown): number {
  isValidhy778v(a, b);
  return (a as number) + (b as number);
}
