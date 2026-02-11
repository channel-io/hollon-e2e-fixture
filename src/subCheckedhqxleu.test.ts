import { subCheckedhqxleu } from './subCheckedhqxleu';

describe('subCheckedhqxleu', () => {
  it('should subtract two positive numbers', () => {
    expect(subCheckedhqxleu(10, 5)).toBe(5);
  });

  it('should handle subtraction resulting in negative number', () => {
    expect(subCheckedhqxleu(5, 10)).toBe(-5);
  });

  it('should handle subtraction resulting in zero', () => {
    expect(subCheckedhqxleu(10, 10)).toBe(0);
  });

  it('should subtract two negative numbers', () => {
    expect(subCheckedhqxleu(-2, -3)).toBe(1);
    expect(subCheckedhqxleu(-5, -2)).toBe(-3);
  });

  it('should subtract numbers with different signs', () => {
    expect(subCheckedhqxleu(5, -3)).toBe(8);
    expect(subCheckedhqxleu(-5, 3)).toBe(-8);
  });

  it('should handle subtraction with zero', () => {
    expect(subCheckedhqxleu(5, 0)).toBe(5);
    expect(subCheckedhqxleu(0, 5)).toBe(-5);
    expect(subCheckedhqxleu(0, 0)).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(subCheckedhqxleu(10.5, 3.2)).toBeCloseTo(7.3);
    expect(subCheckedhqxleu(5, 2.5)).toBeCloseTo(2.5);
  });

  it('should throw error if first parameter is not a finite number', () => {
    expect(() => subCheckedhqxleu(NaN, 5)).toThrow();
    expect(() => subCheckedhqxleu(Infinity, 5)).toThrow();
    expect(() => subCheckedhqxleu('not a number', 5)).toThrow();
    expect(() => subCheckedhqxleu(null, 5)).toThrow();
    expect(() => subCheckedhqxleu(undefined, 5)).toThrow();
  });

  it('should throw error if second parameter is not a finite number', () => {
    expect(() => subCheckedhqxleu(5, NaN)).toThrow();
    expect(() => subCheckedhqxleu(5, Infinity)).toThrow();
    expect(() => subCheckedhqxleu(5, 'not a number')).toThrow();
    expect(() => subCheckedhqxleu(5, null)).toThrow();
    expect(() => subCheckedhqxleu(5, undefined)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => subCheckedhqxleu(NaN, NaN)).toThrow();
    expect(() => subCheckedhqxleu(Infinity, -Infinity)).toThrow();
  });

  it('should handle large numbers', () => {
    expect(subCheckedhqxleu(3000000, 1000000)).toBe(2000000);
    expect(subCheckedhqxleu(-1000000, 1000000)).toBe(-2000000);
  });

  it('should provide helpful error messages for invalid inputs', () => {
    expect(() => subCheckedhqxleu(NaN, 5)).toThrow(/First parameter/);
    expect(() => subCheckedhqxleu(5, NaN)).toThrow(/Second parameter/);
  });
});
