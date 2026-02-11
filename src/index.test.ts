import { greet, reverseStringi1u45c } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringi1u45c', () => {
  it('should reverse a basic string', () => {
    expect(reverseStringi1u45c('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringi1u45c('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringi1u45c('a')).toBe('a');
  });

  it('should reverse strings with spaces', () => {
    expect(reverseStringi1u45c('hello world')).toBe('dlrow olleh');
  });

  it('should handle special characters', () => {
    expect(reverseStringi1u45c('a!b@c#')).toBe('#c@b!a');
  });

  it('should handle unicode/emoji correctly', () => {
    expect(reverseStringi1u45c('👋🌍')).toBe('🌍👋');
  });
});
