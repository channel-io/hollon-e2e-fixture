import { addSafehrx0lg } from './addSafehrx0lg';

describe('addSafehrx0lg', () => {
  it('should throw Error if first argument fails validation', () => {
    expect(() => addSafehrx0lg(NaN, 5)).toThrow();
    expect(() => addSafehrx0lg(Infinity, 5)).toThrow();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => addSafehrx0lg('not a number' as any, 5)).toThrow();
  });

  it('should throw Error if second argument fails validation', () => {
    expect(() => addSafehrx0lg(5, NaN)).toThrow();
    expect(() => addSafehrx0lg(5, Infinity)).toThrow();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => addSafehrx0lg(5, 'not a number' as any)).toThrow();
  });

  it('should return correct sum for positive integers: addSafehrx0lg(2, 3) === 5', () => {
    expect(addSafehrx0lg(2, 3)).toBe(5);
  });

  it('should work with negative numbers: addSafehrx0lg(-5, 3) === -2', () => {
    expect(addSafehrx0lg(-5, 3)).toBe(-2);
  });

  it('should work with floats: addSafehrx0lg(1.5, 2.5) === 4', () => {
    expect(addSafehrx0lg(1.5, 2.5)).toBe(4);
  });

  it('should work with zero: addSafehrx0lg(0, 5) === 5', () => {
    expect(addSafehrx0lg(0, 5)).toBe(5);
  });

  it('should work with negative floats', () => {
    expect(addSafehrx0lg(-1.5, 0.5)).toBe(-1);
  });

  it('should work with both negative numbers', () => {
    expect(addSafehrx0lg(-3, -7)).toBe(-10);
  });

  it('should work with large numbers', () => {
    expect(addSafehrx0lg(1000000, 2000000)).toBe(3000000);
  });
});
