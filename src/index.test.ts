import { greet, reverseString } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseString', () => {
  it('should reverse a basic string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseString('a!@#')).toBe('#@!a');
  });
});
