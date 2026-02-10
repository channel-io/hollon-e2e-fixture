import { greet, reverseString, reverseStringg2zzdz, reverseStringg32ayz, reverseStringg643dv } from './index';

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

describe('reverseStringg2zzdz', () => {
  it('should reverse a basic string', () => {
    expect(reverseStringg2zzdz('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringg2zzdz('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringg2zzdz('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringg2zzdz('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringg2zzdz('a!@#')).toBe('#@!a');
  });

  it('should reverse string with unicode characters', () => {
    expect(reverseStringg2zzdz('café')).toBe('éfac');
  });
});

describe('reverseStringg32ayz', () => {
  it('should reverse a basic string', () => {
    expect(reverseStringg32ayz('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringg32ayz('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringg32ayz('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringg32ayz('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringg32ayz('a!@#')).toBe('#@!a');
  });
});

describe('reverseStringg643dv', () => {
  it('should reverse a basic string', () => {
    expect(reverseStringg643dv('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseStringg643dv('')).toBe('');
  });

  it('should handle single character', () => {
    expect(reverseStringg643dv('a')).toBe('a');
  });

  it('should reverse string with spaces', () => {
    expect(reverseStringg643dv('hello world')).toBe('dlrow olleh');
  });

  it('should reverse string with special characters', () => {
    expect(reverseStringg643dv('a!@#')).toBe('#@!a');
  });
});
