export function isValidi2pxh7(a: unknown, b: unknown): void {
  if (typeof a !== 'number' || !Number.isFinite(a)) {
    throw new Error('first argument must be a finite number');
  }
  if (typeof b !== 'number' || !Number.isFinite(b)) {
    throw new Error('second argument must be a finite number');
  }
}
