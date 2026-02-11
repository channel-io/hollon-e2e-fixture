import { greet, reverseStringhylkf9 } from './index';

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('reverseStringhylkf9', () => {
  it('should reverse a simple string', () => {
    expect(reverseStringhylkf9('hello')).toBe('olleh');
  });

  it('should handle single character', () => {
    expect(reverseStringhylkf9('a')).toBe('a');
  });

  it('should handle empty string', () => {
    expect(reverseStringhylkf9('')).toBe('');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringhylkf9('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringhylkf9('a!b@c#')).toBe('#c@b!a');
  });
});
