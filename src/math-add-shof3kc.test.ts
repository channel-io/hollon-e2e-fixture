import { addNumbershof3kc } from './math-add-shof3kc';

describe('addNumbershof3kc', () => {
  it('should add two positive numbers', () => {
    expect(addNumbershof3kc(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(addNumbershof3kc(-5, -3)).toBe(-8);
  });

  it('should add zero to a positive number', () => {
    expect(addNumbershof3kc(5, 0)).toBe(5);
  });

  it('should add zero to a negative number', () => {
    expect(addNumbershof3kc(-5, 0)).toBe(-5);
  });

  it('should add two zeros', () => {
    expect(addNumbershof3kc(0, 0)).toBe(0);
  });

  it('should add mixed sign numbers (negative + positive)', () => {
    expect(addNumbershof3kc(-5, 3)).toBe(-2);
  });

  it('should add mixed sign numbers (positive + negative)', () => {
    expect(addNumbershof3kc(10, -7)).toBe(3);
  });

  it('should add floating point numbers', () => {
    expect(addNumbershof3kc(1.5, 2.5)).toBe(4);
  });

  it('should handle large numbers', () => {
    expect(addNumbershof3kc(1000000, 2000000)).toBe(3000000);
  });
});
