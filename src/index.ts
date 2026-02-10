/**
 * Returns a greeting message for the given name.
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Reverses the input string.
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
