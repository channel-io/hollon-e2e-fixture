import { checkNumhsfgy5 } from './checkNumhsfgy5';

/**
 * Performs safe subtraction after validating both inputs are finite numbers.
 * Uses checkNumhsfgy5 to validate inputs before performing arithmetic.
 *
 * @param a - The minuend (number to subtract from)
 * @param b - The subtrahend (number to subtract)
 * @returns The result of a - b
 * @throws {Error} If either parameter is not a finite number
 */
export function subSafehsfgy5(a: number, b: number): number {
  checkNumhsfgy5(a, b);
  return a - b;
}