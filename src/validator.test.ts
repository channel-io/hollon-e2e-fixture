import { validateInputi3jb57 } from './validator';

describe('validateInputi3jb57', () => {
  it('should pass when both inputs are valid numbers', () => {
    expect(() => validateInputi3jb57(1, 2)).not.toThrow();
    expect(() => validateInputi3jb57(0, 0)).not.toThrow();
    expect(() => validateInputi3jb57(-5, 10)).not.toThrow();
  });

  it('should throw Error when a is NaN', () => {
    expect(() => validateInputi3jb57(NaN, 5)).toThrow(Error);
  });

  it('should throw Error when b is NaN', () => {
    expect(() => validateInputi3jb57(5, NaN)).toThrow(Error);
  });

  it('should throw Error when both are NaN', () => {
    expect(() => validateInputi3jb57(NaN, NaN)).toThrow(Error);
  });
});
