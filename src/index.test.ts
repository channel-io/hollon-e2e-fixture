import { greet, reverseStringho30fs } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringho30fs', () => {
  it('should reverse a normal string', () => {
    expect(reverseStringho30fs('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringho30fs('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringho30fs('a')).toBe('a');
  });

  it('should handle palindrome', () => {
    expect(reverseStringho30fs('racecar')).toBe('racecar');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringho30fs('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringho30fs('a!b@c')).toBe('c@b!a');
  });

  it('should reverse string with numbers', () => {
    expect(reverseStringho30fs('12345')).toBe('54321');
  });
});
