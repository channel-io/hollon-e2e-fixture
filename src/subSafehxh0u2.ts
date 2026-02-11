import { checkNumhxh0u2 } from './checkNumhxh0u2';

/**
 * Safely subtracts two numbers after validating them with checkNumhxh0u2.
 * Throws an Error if either argument fails validation.
 *
 * @param a - First number (minuend)
 * @param b - Second number (subtrahend)
 * @returns The difference of a - b
 * @throws {Error} If either parameter is not a finite number
 */
export function subSafehxh0u2(a: number, b: number): number {
  checkNumhxh0u2(a, b);
  return a - b;
}
