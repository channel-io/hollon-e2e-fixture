import { addNumbershj2tql } from './math-add';

describe('addNumbershj2tql', () => {
  it('should add two positive numbers', () => {
    expect(addNumbershj2tql(5, 3)).toBe(8);
  });

  it('should add two negative numbers', () => {
    expect(addNumbershj2tql(-5, -3)).toBe(-8);
  });

  it('should add positive and negative number', () => {
    expect(addNumbershj2tql(5, -3)).toBe(2);
  });

  it('should add negative and positive number', () => {
    expect(addNumbershj2tql(-5, 3)).toBe(-2);
  });

  it('should handle zero cases', () => {
    expect(addNumbershj2tql(0, 5)).toBe(5);
  });

  it('should handle both zero', () => {
    expect(addNumbershj2tql(0, 0)).toBe(0);
  });

  it('should add decimal numbers', () => {
    expect(addNumbershj2tql(2.5, 3.7)).toBeCloseTo(6.2);
  });

  it('should add large numbers', () => {
    expect(addNumbershj2tql(1000000, 2000000)).toBe(3000000);
  });

  it('should handle small decimal precision', () => {
    expect(addNumbershj2tql(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
