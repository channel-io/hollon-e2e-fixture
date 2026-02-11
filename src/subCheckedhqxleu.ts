import { isValidhqxleu } from './isValidhqxleu';

/**
 * Subtracts two numbers after validating they are finite numbers.
 * Uses isValidhqxleu to validate both inputs before performing subtraction.
 *
 * @param a - First number (minuend)
 * @param b - Second number (subtrahend)
 * @returns The difference of a minus b
 * @throws {Error} If either parameter is not a finite number
 */
export function subCheckedhqxleu(a: unknown, b: unknown): number {
  isValidhqxleu(a, b);
  return (a as number) - (b as number);
}
