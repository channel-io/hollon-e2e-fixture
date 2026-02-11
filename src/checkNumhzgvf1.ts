export function checkNumhzgvf1(a: unknown, b: unknown): void {
  if (typeof a !== 'number' || !Number.isFinite(a)) {
    throw new Error('Parameter a is not a finite number');
  }

  if (typeof b !== 'number' || !Number.isFinite(b)) {
    throw new Error('Parameter b is not a finite number');
  }
}
