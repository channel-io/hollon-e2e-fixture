import { subtractNumbershj2tql } from './math-sub';

describe('subtractNumbershj2tql', () => {
  // Basic Operations
  it('should subtract two positive numbers', () => {
    expect(subtractNumbershj2tql(10, 5)).toBe(5);
  });

  it('should subtract two negative numbers', () => {
    expect(subtractNumbershj2tql(-10, -5)).toBe(-5);
  });

  it('should subtract positive and negative number (double negative)', () => {
    expect(subtractNumbershj2tql(10, -5)).toBe(15);
  });

  it('should subtract negative and positive number', () => {
    expect(subtractNumbershj2tql(-10, 5)).toBe(-15);
  });

  // Zero Cases
  it('should subtract zero from a number', () => {
    expect(subtractNumbershj2tql(10, 0)).toBe(10);
  });

  it('should subtract a number from zero', () => {
    expect(subtractNumbershj2tql(0, 5)).toBe(-5);
  });

  it('should subtract zero from zero', () => {
    expect(subtractNumbershj2tql(0, 0)).toBe(0);
  });

  // Decimal Numbers
  it('should subtract decimal numbers', () => {
    expect(subtractNumbershj2tql(5.5, 2.3)).toBeCloseTo(3.2);
  });

  it('should subtract with negative decimals', () => {
    expect(subtractNumbershj2tql(-5.5, 2.5)).toBeCloseTo(-8.0);
  });

  it('should handle small decimal precision', () => {
    expect(subtractNumbershj2tql(0.3, 0.1)).toBeCloseTo(0.2);
  });

  // Edge Cases
  it('should subtract large numbers', () => {
    expect(subtractNumbershj2tql(1000000, 500000)).toBe(500000);
  });

  it('should handle very small decimal differences', () => {
    expect(subtractNumbershj2tql(1.0001, 1.0)).toBeCloseTo(0.0001);
  });

  it('should return negative result when subtracting larger number', () => {
    expect(subtractNumbershj2tql(3, 10)).toBe(-7);
  });
});
