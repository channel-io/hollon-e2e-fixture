# Hollon E2E Fixture Project

## Project Overview
- **Purpose**: Minimal TypeScript project used as a target repository for hollon-ai E2E tests
- **Language**: TypeScript
- **Testing Framework**: Jest
- **Linting**: ESLint

## Tech Stack
- TypeScript 5.7.0
- Jest 29.7.0 with ts-jest
- ESLint 9.18.0 with typescript-eslint

## Code Patterns

### Function Structure
- All functions are exported from `src/index.ts`
- JSDoc comments above each function
- Simple, focused implementations

### reverseString Variants
Pattern used for all reverse string functions:
```typescript
export function reverseStringXXXXX(str: string): string {
  return str.split('').reverse().join('');
}
```

Multiple variants exist (reverseString, reverseStringg2zzdz, reverseStringg32ayz) with identical implementations but different names.

### Test Pattern
- Tests in `src/index.test.ts`
- Import functions at top
- Test cases per function:
  - Basic string reversal
  - Empty string
  - Single character
  - Strings with spaces
  - Special characters
  - Unicode characters (for some)

## Commands
- `npm run build` - TypeScript compilation
- `npm test` - Run Jest tests
- `npm run lint` - Run ESLint on src/

## TDD Rules
- Write tests before implementation
- Every new function must have tests in same directory
- Run tests and lint before creating PR
- Keep changes minimal and focused
