import { addNumbersgrs7lp, addNumbersgrvn13 } from './math-add';

describe('addNumbersgrs7lp', () => {
  it('should add two positive numbers', () => {
    expect(addNumbersgrs7lp(2, 3)).toBe(5);
  });

  it('should add positive and negative numbers', () => {
    expect(addNumbersgrs7lp(-5, 3)).toBe(-2);
  });

  it('should handle zero as first argument', () => {
    expect(addNumbersgrs7lp(0, 5)).toBe(5);
  });

  it('should handle zero as second argument', () => {
    expect(addNumbersgrs7lp(5, 0)).toBe(5);
  });

  it('should handle both arguments as zero', () => {
    expect(addNumbersgrs7lp(0, 0)).toBe(0);
  });

  it('should add decimal numbers', () => {
    expect(addNumbersgrs7lp(1.5, 2.5)).toBe(4);
  });

  it('should add large numbers', () => {
    expect(addNumbersgrs7lp(1000000, 2000000)).toBe(3000000);
  });

  it('should add negative decimal numbers', () => {
    expect(addNumbersgrs7lp(-1.5, -2.5)).toBe(-4);
  });

  it('should add positive and negative decimals', () => {
    expect(addNumbersgrs7lp(1.5, -2.5)).toBe(-1);
  });
});

describe('addNumbersgrvn13', () => {
  it('should add two positive numbers', () => {
    expect(addNumbersgrvn13(5, 3)).toBe(8);
  });

  it('should add positive and negative numbers', () => {
    expect(addNumbersgrvn13(10, -3)).toBe(7);
  });

  it('should handle zero as first argument', () => {
    expect(addNumbersgrvn13(0, 5)).toBe(5);
  });

  it('should handle zero as second argument', () => {
    expect(addNumbersgrvn13(7, 0)).toBe(7);
  });

  it('should handle both arguments as zero', () => {
    expect(addNumbersgrvn13(0, 0)).toBe(0);
  });

  it('should add decimal numbers', () => {
    expect(addNumbersgrvn13(1.5, 2.5)).toBe(4);
  });

  it('should add large numbers', () => {
    expect(addNumbersgrvn13(1000000, 2000000)).toBe(3000000);
  });

  it('should add negative decimal numbers', () => {
    expect(addNumbersgrvn13(-1.5, -2.5)).toBe(-4);
  });

  it('should add positive and negative decimals', () => {
    expect(addNumbersgrvn13(3.7, -1.2)).toBeCloseTo(2.5, 1);
  });
});
