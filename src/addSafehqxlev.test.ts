import { addSafehqxlev } from './addSafehqxlev';

describe('addSafehqxlev', () => {
  it('should add two positive numbers', () => {
    expect(addSafehqxlev(1, 2)).toBe(3);
    expect(addSafehqxlev(5, 10)).toBe(15);
  });

  it('should add zero and a number', () => {
    expect(addSafehqxlev(0, 5)).toBe(5);
    expect(addSafehqxlev(5, 0)).toBe(5);
    expect(addSafehqxlev(0, 0)).toBe(0);
  });

  it('should add negative numbers', () => {
    expect(addSafehqxlev(-1, -2)).toBe(-3);
    expect(addSafehqxlev(-5, 10)).toBe(5);
    expect(addSafehqxlev(10, -5)).toBe(5);
  });

  it('should add floating point numbers', () => {
    expect(addSafehqxlev(1.5, 2.5)).toBe(4);
    expect(addSafehqxlev(0.1, 0.2)).toBeCloseTo(0.3);
    expect(addSafehqxlev(-3.14, 2.71)).toBeCloseTo(-0.43);
  });

  it('should add large finite numbers', () => {
    expect(addSafehqxlev(1000000, 2000000)).toBe(3000000);
    expect(addSafehqxlev(-1000000, 1000000)).toBe(0);
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => addSafehqxlev(NaN, 5)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => addSafehqxlev(Infinity, 5)).toThrow();
    expect(() => addSafehqxlev(-Infinity, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => addSafehqxlev(5, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => addSafehqxlev(5, Infinity)).toThrow();
    expect(() => addSafehqxlev(5, -Infinity)).toThrow();
  });

  it('should throw error with helpful message for invalid first parameter', () => {
    expect(() => addSafehqxlev(NaN, 5)).toThrow(/First parameter/);
  });

  it('should throw error with helpful message for invalid second parameter', () => {
    expect(() => addSafehqxlev(5, NaN)).toThrow(/Second parameter/);
  });
});
