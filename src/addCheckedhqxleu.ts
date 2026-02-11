import { isValidhqxleu } from './isValidhqxleu';

/**
 * Adds two numbers after validating they are finite numbers.
 * Uses isValidhqxleu to validate both inputs before performing addition.
 *
 * @param a - First number to add
 * @param b - Second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number
 */
export function addCheckedhqxleu(a: unknown, b: unknown): number {
  isValidhqxleu(a, b);
  return (a as number) + (b as number);
}
