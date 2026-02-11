import { checkNumhqxlev } from './checkNumhqxlev';

/**
 * Safely adds two numbers after validating they are both finite numbers.
 * Uses checkNumhqxlev to validate inputs before performing addition.
 *
 * @param a - First number to add
 * @param b - Second number to add
 * @returns The sum of a and b
 * @throws {Error} If either parameter is not a finite number
 */
export function addSafehqxlev(a: number, b: number): number {
  checkNumhqxlev(a, b);
  return a + b;
}
