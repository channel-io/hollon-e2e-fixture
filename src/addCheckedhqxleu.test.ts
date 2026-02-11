import { addCheckedhqxleu } from './addCheckedhqxleu';

describe('addCheckedhqxleu', () => {
  it('should add two positive numbers', () => {
    expect(addCheckedhqxleu(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(addCheckedhqxleu(-2, -3)).toBe(-5);
  });

  it('should add numbers with different signs', () => {
    expect(addCheckedhqxleu(5, -3)).toBe(2);
    expect(addCheckedhqxleu(-5, 3)).toBe(-2);
  });

  it('should handle addition with zero', () => {
    expect(addCheckedhqxleu(0, 5)).toBe(5);
    expect(addCheckedhqxleu(5, 0)).toBe(5);
    expect(addCheckedhqxleu(0, 0)).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(addCheckedhqxleu(1.5, 2.5)).toBe(4);
    expect(addCheckedhqxleu(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('should throw error if first parameter is not a finite number', () => {
    expect(() => addCheckedhqxleu(NaN, 5)).toThrow();
    expect(() => addCheckedhqxleu(Infinity, 5)).toThrow();
    expect(() => addCheckedhqxleu('not a number', 5)).toThrow();
    expect(() => addCheckedhqxleu(null, 5)).toThrow();
    expect(() => addCheckedhqxleu(undefined, 5)).toThrow();
  });

  it('should throw error if second parameter is not a finite number', () => {
    expect(() => addCheckedhqxleu(5, NaN)).toThrow();
    expect(() => addCheckedhqxleu(5, Infinity)).toThrow();
    expect(() => addCheckedhqxleu(5, 'not a number')).toThrow();
    expect(() => addCheckedhqxleu(5, null)).toThrow();
    expect(() => addCheckedhqxleu(5, undefined)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => addCheckedhqxleu(NaN, NaN)).toThrow();
    expect(() => addCheckedhqxleu(Infinity, -Infinity)).toThrow();
  });

  it('should handle large numbers', () => {
    expect(addCheckedhqxleu(1000000, 2000000)).toBe(3000000);
    expect(addCheckedhqxleu(-1000000, 1000000)).toBe(0);
  });

  it('should provide helpful error messages for invalid inputs', () => {
    expect(() => addCheckedhqxleu(NaN, 5)).toThrow(/First parameter/);
    expect(() => addCheckedhqxleu(5, NaN)).toThrow(/Second parameter/);
  });
});
