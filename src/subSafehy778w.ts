import { checkNumhy778w } from './checkNumhy778w';

/**
 * Safely subtracts two numbers after validating them.
 *
 * @param a - The minuend (number to subtract from)
 * @param b - The subtrahend (number to subtract)
 * @returns The difference: a - b
 * @throws {Error} If either parameter is not a finite number
 *
 * @example
 * subSafehy778w(10, 5); // Returns 5
 * subSafehy778w(5, NaN); // Throws Error
 */
export function subSafehy778w(a: unknown, b: unknown): number {
  checkNumhy778w(a, b);
  return (a as number) - (b as number);
}
