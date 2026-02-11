import { greet, reverseStringhxh0u0 } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringhxh0u0', () => {
  it('should reverse a normal string', () => {
    expect(reverseStringhxh0u0('hello')).toBe('olleh');
  });

  it('should return empty string for empty input', () => {
    expect(reverseStringhxh0u0('')).toBe('');
  });

  it('should return the same character for single character', () => {
    expect(reverseStringhxh0u0('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringhxh0u0('hello world')).toBe('dlrow olleh');
  });

  it('should handle special characters', () => {
    expect(reverseStringhxh0u0('hello!')).toBe('!olleh');
  });
});
