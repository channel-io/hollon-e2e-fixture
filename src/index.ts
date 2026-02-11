/**
 * Returns a greeting message for the given name.
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Reverses the input string.
 *
 * @param str - The string to reverse
 * @returns The reversed string
 * @example
 * reverseStringi04zlr('hello') // returns 'olleh'
 */
export function reverseStringi04zlr(str: string): string {
  return Array.from(str).reverse().join('');
}
