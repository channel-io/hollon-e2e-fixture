import { checkNumhrx0lg } from './checkNumhrx0lg';

/**
 * Performs safe subtraction after validating both inputs are finite numbers.
 * Uses checkNumhrx0lg to validate inputs before performing arithmetic.
 *
 * @param a - The minuend (number to subtract from)
 * @param b - The subtrahend (number to subtract)
 * @returns The result of a - b
 * @throws {Error} If either parameter is not a finite number
 */
export function subSafehrx0lg(a: number, b: number): number {
  checkNumhrx0lg(a, b);
  return a - b;
}
