import { greet, reverseStringgqir7h } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringgqir7h', () => {
  it('should reverse a basic string', () => {
    expect(reverseStringgqir7h('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringgqir7h('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringgqir7h('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringgqir7h('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringgqir7h('a!@#')).toBe('#@!a');
  });

  it('should reverse string with unicode characters', () => {
    expect(reverseStringgqir7h('café')).toBe('éfac');
  });
});
