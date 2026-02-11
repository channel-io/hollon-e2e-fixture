import { isValidhy778v } from './isValidhy778v';

/**
 * Subtracts two numbers after validating that both are finite numbers.
 *
 * @param a - The first number to subtract from
 * @param b - The second number to subtract
 * @returns The difference of a and b (a - b)
 * @throws {Error} If either parameter is not a finite number
 *
 * @example
 * subCheckedhy778v(5, 3); // Returns 2
 * subCheckedhy778v(1.5, 2.5); // Returns -1
 * subCheckedhy778v('5', 3); // Throws Error
 */
export function subCheckedhy778v(a: unknown, b: unknown): number {
  isValidhy778v(a, b);
  return (a as number) - (b as number);
}
