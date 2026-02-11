import { subtractNumbersho5nxe } from './math-sub';

describe('subtractNumbersho5nxe', () => {
  it('should subtract two positive numbers', () => {
    expect(subtractNumbersho5nxe(5, 3)).toBe(2);
  });

  it('should subtract two negative numbers', () => {
    expect(subtractNumbersho5nxe(-5, -3)).toBe(-2);
  });

  it('should subtract zero from a positive number', () => {
    expect(subtractNumbersho5nxe(5, 0)).toBe(5);
  });

  it('should subtract a positive number from zero', () => {
    expect(subtractNumbersho5nxe(0, 5)).toBe(-5);
  });

  it('should subtract two zeros', () => {
    expect(subtractNumbersho5nxe(0, 0)).toBe(0);
  });

  it('should subtract a negative number from a positive number', () => {
    expect(subtractNumbersho5nxe(5, -3)).toBe(8);
  });

  it('should subtract a positive number from a negative number', () => {
    expect(subtractNumbersho5nxe(-5, 3)).toBe(-8);
  });

  it('should subtract floating point numbers', () => {
    expect(subtractNumbersho5nxe(5.5, 2.3)).toBeCloseTo(3.2, 1);
  });

  it('should handle large numbers', () => {
    expect(subtractNumbersho5nxe(1000000, 2000000)).toBe(-1000000);
  });

  it('should handle very small floating point differences', () => {
    expect(subtractNumbersho5nxe(0.1, 0.2)).toBeCloseTo(-0.1, 10);
  });
});
