import { checkNumhsfgy5 } from './checkNumhsfgy5';

/**
 * Safely adds two numbers after validating them.
 * Validates both parameters using checkNumhsfgy5 to ensure they are finite numbers,
 * then returns their sum.
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 * @throws {Error} If either a or b is not a finite number (NaN, Infinity, or non-numeric type)
 */
export function addSafehsfgy5(a: number, b: number): number {
  checkNumhsfgy5(a, b);
  return a + b;
}
