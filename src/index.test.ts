import { greet, reverseStringi3qaei } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringi3qaei', () => {
  it('should reverse a basic string', () => {
    expect(reverseStringi3qaei('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringi3qaei('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringi3qaei('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringi3qaei('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringi3qaei('hello!')).toBe('!olleh');
  });

  it('should handle unicode characters', () => {
    expect(reverseStringi3qaei('hello🎉')).toBe('🎉olleh');
  });
});
