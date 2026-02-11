import { checkNumhqxlev } from './checkNumhqxlev';

/**
 * Safely subtracts two numbers after validating they are finite.
 * Uses checkNumhqxlev to validate inputs before performing subtraction.
 *
 * @param a - The minuend (first number)
 * @param b - The subtrahend (second number)
 * @returns The result of a - b
 * @throws {Error} If either parameter is not a finite number
 */
export function subSafehqxlev(a: number, b: number): number {
  checkNumhqxlev(a, b);
  return a - b;
}
