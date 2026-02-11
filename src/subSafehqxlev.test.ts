import { subSafehqxlev } from './subSafehqxlev';

describe('subSafehqxlev', () => {
  it('should correctly subtract two positive numbers', () => {
    expect(subSafehqxlev(10, 3)).toBe(7);
    expect(subSafehqxlev(5, 5)).toBe(0);
    expect(subSafehqxlev(100, 1)).toBe(99);
  });

  it('should correctly subtract with negative numbers', () => {
    expect(subSafehqxlev(-5, 3)).toBe(-8);
    expect(subSafehqxlev(5, -3)).toBe(8);
    expect(subSafehqxlev(-5, -3)).toBe(-2);
  });

  it('should correctly subtract floating point numbers', () => {
    expect(subSafehqxlev(5.5, 2.3)).toBeCloseTo(3.2);
    expect(subSafehqxlev(10.1, 0.1)).toBeCloseTo(10);
    expect(subSafehqxlev(1.5, 1.5)).toBeCloseTo(0);
  });

  it('should correctly subtract with zero', () => {
    expect(subSafehqxlev(5, 0)).toBe(5);
    expect(subSafehqxlev(0, 5)).toBe(-5);
    expect(subSafehqxlev(0, 0)).toBe(0);
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => subSafehqxlev(NaN, 5)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => subSafehqxlev(Infinity, 5)).toThrow();
    expect(() => subSafehqxlev(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => subSafehqxlev('not a number' as unknown as number, 5)).toThrow();
    expect(() => subSafehqxlev(null as unknown as number, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => subSafehqxlev(5, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => subSafehqxlev(5, Infinity)).toThrow();
    expect(() => subSafehqxlev(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => subSafehqxlev(5, 'not a number' as unknown as number)).toThrow();
    expect(() => subSafehqxlev(5, null as unknown as number)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => subSafehqxlev(NaN, NaN)).toThrow();
    expect(() => subSafehqxlev(Infinity, undefined as unknown as number)).toThrow();
  });

  it('should provide helpful error messages for validation failures', () => {
    expect(() => subSafehqxlev(NaN, 5)).toThrow(/First parameter/);
    expect(() => subSafehqxlev(5, NaN)).toThrow(/Second parameter/);
  });
});
