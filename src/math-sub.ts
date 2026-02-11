import { validateInputhzy4eb } from './validator';

export function subtractSafehzy4eb(a: number, b: number): number {
  validateInputhzy4eb(a, b);
  return a - b;
}
