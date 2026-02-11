import { subSafehrx0lg } from './subSafehrx0lg';

describe('subSafehrx0lg', () => {
  it('should throw Error if first argument fails validation', () => {
    expect(() => subSafehrx0lg(NaN, 3)).toThrow();
    expect(() => subSafehrx0lg(Infinity, 3)).toThrow();
    expect(() => subSafehrx0lg('not a number' as unknown as number, 3)).toThrow();
  });

  it('should throw Error if second argument fails validation', () => {
    expect(() => subSafehrx0lg(5, NaN)).toThrow();
    expect(() => subSafehrx0lg(5, Infinity)).toThrow();
    expect(() => subSafehrx0lg(5, 'not a number' as unknown as number)).toThrow();
  });

  it('should return 2 for subSafehrx0lg(5, 3)', () => {
    expect(subSafehrx0lg(5, 3)).toBe(2);
  });

  it('should return -2 for subSafehrx0lg(3, 5)', () => {
    expect(subSafehrx0lg(3, 5)).toBe(-2);
  });

  it('should return 3 for subSafehrx0lg(5.5, 2.5)', () => {
    expect(subSafehrx0lg(5.5, 2.5)).toBe(3);
  });

  it('should return -5 for subSafehrx0lg(0, 5)', () => {
    expect(subSafehrx0lg(0, 5)).toBe(-5);
  });
});
