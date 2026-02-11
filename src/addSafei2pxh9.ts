import { checkNumi2pxh9 } from './checkNumi2pxh9';

/**
 * Safely adds two numbers after validating they are finite.
 * @param a - First number to add
 * @param b - Second number to add
 * @returns Sum of a and b
 * @throws {Error} If either argument is not a finite number
 */
export function addSafei2pxh9(a: number, b: number): number {
  checkNumi2pxh9(a, b);
  return a + b;
}
