import { addNumbersi3afp9 } from './math-add';

describe('addNumbersi3afp9', () => {
  it('should add two positive numbers', () => {
    expect(addNumbersi3afp9(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(addNumbersi3afp9(-5, -10)).toBe(-15);
  });

  it('should add negative and positive numbers (negative first)', () => {
    expect(addNumbersi3afp9(-5, 10)).toBe(5);
  });

  it('should add negative and positive numbers (positive first)', () => {
    expect(addNumbersi3afp9(10, -5)).toBe(5);
  });

  it('should add zero to zero', () => {
    expect(addNumbersi3afp9(0, 0)).toBe(0);
  });

  it('should add positive number to zero', () => {
    expect(addNumbersi3afp9(5, 0)).toBe(5);
  });

  it('should add zero to positive number', () => {
    expect(addNumbersi3afp9(0, 5)).toBe(5);
  });

  it('should add decimal numbers', () => {
    expect(addNumbersi3afp9(1.5, 2.3)).toBeCloseTo(3.8);
  });

  it('should add large numbers', () => {
    expect(addNumbersi3afp9(1000000, 2000000)).toBe(3000000);
  });
});
