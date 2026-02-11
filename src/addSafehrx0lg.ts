import { checkNumhrx0lg } from './checkNumhrx0lg';

/**
 * Safely adds two numbers after validating them with checkNumhrx0lg.
 * Throws an Error if either argument fails validation.
 *
 * @param a - First number to add
 * @param b - Second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number
 */
export function addSafehrx0lg(a: number, b: number): number {
  checkNumhrx0lg(a, b);
  return a + b;
}
