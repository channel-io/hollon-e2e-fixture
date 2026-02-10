import { subtractNumbersgrvn13 } from './math-sub';

describe('subtractNumbersgrvn13', () => {
  it('should subtract two positive numbers', () => {
    expect(subtractNumbersgrvn13(5, 3)).toBe(2);
  });

  it('should subtract negative from positive', () => {
    expect(subtractNumbersgrvn13(5, -3)).toBe(8);
  });

  it('should subtract positive from negative', () => {
    expect(subtractNumbersgrvn13(-5, 3)).toBe(-8);
  });

  it('should handle zero as first argument', () => {
    expect(subtractNumbersgrvn13(0, 5)).toBe(-5);
  });

  it('should handle zero as second argument', () => {
    expect(subtractNumbersgrvn13(5, 0)).toBe(5);
  });

  it('should handle both arguments as zero', () => {
    expect(subtractNumbersgrvn13(0, 0)).toBe(0);
  });

  it('should subtract decimal numbers', () => {
    expect(subtractNumbersgrvn13(5.5, 2.5)).toBe(3);
  });

  it('should subtract large numbers', () => {
    expect(subtractNumbersgrvn13(1000000, 500000)).toBe(500000);
  });

  it('should subtract negative decimal numbers', () => {
    expect(subtractNumbersgrvn13(-1.5, 2.5)).toBe(-4);
  });
});
