import { addNumbersho5nxe } from './math-add';

describe('addNumbersho5nxe', () => {
  it('should add two positive numbers', () => {
    expect(addNumbersho5nxe(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(addNumbersho5nxe(-5, -3)).toBe(-8);
  });

  it('should add zero to a positive number', () => {
    expect(addNumbersho5nxe(5, 0)).toBe(5);
  });

  it('should add zero to a negative number', () => {
    expect(addNumbersho5nxe(-5, 0)).toBe(-5);
  });

  it('should add two zeros', () => {
    expect(addNumbersho5nxe(0, 0)).toBe(0);
  });

  it('should add mixed sign numbers (negative + positive)', () => {
    expect(addNumbersho5nxe(-5, 3)).toBe(-2);
  });

  it('should add mixed sign numbers (positive + negative)', () => {
    expect(addNumbersho5nxe(10, -7)).toBe(3);
  });

  it('should add floating point numbers', () => {
    expect(addNumbersho5nxe(1.5, 2.5)).toBe(4);
  });

  it('should handle large numbers', () => {
    expect(addNumbersho5nxe(1000000, 2000000)).toBe(3000000);
  });
});
