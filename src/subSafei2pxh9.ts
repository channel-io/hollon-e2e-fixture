import { checkNumi2pxh9 } from './checkNumi2pxh9';

/**
 * Safely subtracts two numbers after validating they are safe integers.
 * @param a - The minuend (number to subtract from)
 * @param b - The subtrahend (number to subtract)
 * @returns The difference of a - b
 * @throws Error if either input is not a safe integer
 */
export function subSafei2pxh9(a: number, b: number): number {
  checkNumi2pxh9(a, b);
  return a - b;
}
