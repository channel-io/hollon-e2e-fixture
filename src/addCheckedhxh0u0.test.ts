import { addCheckedhxh0u0 } from './addCheckedhxh0u0';

describe('addCheckedhxh0u0', () => {
  // Valid addition cases
  it('should add two positive numbers', () => {
    expect(addCheckedhxh0u0(2, 3)).toBe(5);
    expect(addCheckedhxh0u0(10, 20)).toBe(30);
  });

  it('should add two negative numbers', () => {
    expect(addCheckedhxh0u0(-2, -3)).toBe(-5);
    expect(addCheckedhxh0u0(-10, -20)).toBe(-30);
  });

  it('should add numbers with mixed signs', () => {
    expect(addCheckedhxh0u0(-5, 10)).toBe(5);
    expect(addCheckedhxh0u0(10, -3)).toBe(7);
    expect(addCheckedhxh0u0(-15, 5)).toBe(-10);
  });

  it('should add zero correctly', () => {
    expect(addCheckedhxh0u0(0, 0)).toBe(0);
    expect(addCheckedhxh0u0(5, 0)).toBe(5);
    expect(addCheckedhxh0u0(0, -5)).toBe(-5);
    expect(addCheckedhxh0u0(-10, 0)).toBe(-10);
  });

  it('should add floating point numbers', () => {
    expect(addCheckedhxh0u0(1.5, 2.5)).toBe(4);
    expect(addCheckedhxh0u0(3.2, 1.8)).toBe(5);
  });

  it('should handle floating point precision edge case (0.1 + 0.2)', () => {
    expect(addCheckedhxh0u0(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  it('should add large numbers', () => {
    expect(addCheckedhxh0u0(1000000, 2000000)).toBe(3000000);
    expect(addCheckedhxh0u0(-1000000, 1000000)).toBe(0);
  });

  // Error cases - validation failures
  it('should throw error if first parameter is NaN', () => {
    expect(() => addCheckedhxh0u0(NaN, 5)).toThrow();
    expect(() => addCheckedhxh0u0(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => addCheckedhxh0u0(Infinity, 5)).toThrow();
    expect(() => addCheckedhxh0u0(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => addCheckedhxh0u0('not a number' as unknown as number, 5)).toThrow();
    expect(() => addCheckedhxh0u0(null as unknown as number, 5)).toThrow();
    expect(() => addCheckedhxh0u0(undefined as unknown as number, 5)).toThrow();
    expect(() => addCheckedhxh0u0({} as unknown as number, 5)).toThrow();
    expect(() => addCheckedhxh0u0([] as unknown as number, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => addCheckedhxh0u0(5, NaN)).toThrow();
    expect(() => addCheckedhxh0u0(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => addCheckedhxh0u0(5, Infinity)).toThrow();
    expect(() => addCheckedhxh0u0(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => addCheckedhxh0u0(5, 'not a number' as unknown as number)).toThrow();
    expect(() => addCheckedhxh0u0(5, null as unknown as number)).toThrow();
    expect(() => addCheckedhxh0u0(5, undefined as unknown as number)).toThrow();
    expect(() => addCheckedhxh0u0(5, {} as unknown as number)).toThrow();
    expect(() => addCheckedhxh0u0(5, [] as unknown as number)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => addCheckedhxh0u0(NaN, NaN)).toThrow();
    expect(() => addCheckedhxh0u0(Infinity, -Infinity)).toThrow();
  });

  it('should provide helpful error messages mentioning which parameter failed', () => {
    expect(() => addCheckedhxh0u0(NaN, 5)).toThrow(/Parameter a/);
    expect(() => addCheckedhxh0u0(5, NaN)).toThrow(/Parameter b/);
  });
});
