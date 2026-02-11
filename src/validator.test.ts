import { validateInputhzy4eb } from './validator';

describe('validateInputhzy4eb', () => {
  it('should not throw for valid inputs', () => {
    expect(() => validateInputhzy4eb(1, 2)).not.toThrow();
    expect(() => validateInputhzy4eb(0, 0)).not.toThrow();
    expect(() => validateInputhzy4eb(-1, -2)).not.toThrow();
    expect(() => validateInputhzy4eb(Infinity, -Infinity)).not.toThrow();
  });

  it('should throw when first argument is NaN', () => {
    expect(() => validateInputhzy4eb(NaN, 2)).toThrow(Error);
    expect(() => validateInputhzy4eb(NaN, 2)).toThrow();
  });

  it('should throw when second argument is NaN', () => {
    expect(() => validateInputhzy4eb(1, NaN)).toThrow(Error);
    expect(() => validateInputhzy4eb(1, NaN)).toThrow();
  });

  it('should throw when both arguments are NaN', () => {
    expect(() => validateInputhzy4eb(NaN, NaN)).toThrow(Error);
    expect(() => validateInputhzy4eb(NaN, NaN)).toThrow();
  });

  it('should handle edge cases correctly', () => {
    // Zero values
    expect(() => validateInputhzy4eb(0, 1)).not.toThrow();
    expect(() => validateInputhzy4eb(1, 0)).not.toThrow();

    // Negative values
    expect(() => validateInputhzy4eb(-100, 50)).not.toThrow();
    expect(() => validateInputhzy4eb(50, -100)).not.toThrow();

    // Infinity values
    expect(() => validateInputhzy4eb(Infinity, 1)).not.toThrow();
    expect(() => validateInputhzy4eb(1, Infinity)).not.toThrow();
    expect(() => validateInputhzy4eb(-Infinity, 1)).not.toThrow();
    expect(() => validateInputhzy4eb(1, -Infinity)).not.toThrow();
  });
});
