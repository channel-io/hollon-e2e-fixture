import { greet, reverseStringi04zlr } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringi04zlr', () => {
  describe('basic functionality', () => {
    it('should reverse a simple string', () => {
      expect(reverseStringi04zlr('hello')).toBe('olleh');
    });

    it('should reverse a single character', () => {
      expect(reverseStringi04zlr('a')).toBe('a');
    });

    it('should handle empty string', () => {
      expect(reverseStringi04zlr('')).toBe('');
    });
  });

  describe('edge cases', () => {
    it('should handle strings with spaces', () => {
      expect(reverseStringi04zlr('hello world')).toBe('dlrow olleh');
    });

    it('should handle special characters', () => {
      expect(reverseStringi04zlr('a-b-c')).toBe('c-b-a');
    });

    it('should handle numbers', () => {
      expect(reverseStringi04zlr('abc123')).toBe('321cba');
    });

    it('should handle unicode', () => {
      expect(reverseStringi04zlr('hello🌍')).toBe('🌍olleh');
    });

    it('should handle palindromes', () => {
      expect(reverseStringi04zlr('racecar')).toBe('racecar');
    });
  });
});
