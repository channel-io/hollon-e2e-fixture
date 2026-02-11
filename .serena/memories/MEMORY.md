# hollon-e2e-fixture Project Memory

## Project Overview
TypeScript fixture project for hollon-ai E2E tests. Minimal repo with utility functions.

## Key Commands
- `npm test` - Run Jest tests
- `npm run lint` - Run ESLint
- `npm run build` - Compile TypeScript

## Code Style & Conventions
- **Tests**: Jest framework, test files in same directory as implementation with `.test.ts` suffix
- **Naming**: camelCase for functions (e.g., `addCheckedhqxleu`, `isValidhqxleu`)
- **Validation Pattern**: Functions that use validation import `isValidhqxleu` and call it with parameters
- **JSDoc Comments**: Always include for public functions with @param, @returns, @throws
- **Type Casting**: Use `as number` after validation passes
- **Error Messages**: Descriptive errors that include parameter name and actual value

## Function Pattern Examples
Looking at `addCheckedhqxleu`:
1. Import validator function
2. Call validator with all parameters upfront
3. Type cast and perform operation
4. Return result

## TDD Pattern
1. Write comprehensive test file first
2. Run tests to confirm failure
3. Implement minimal code to pass tests
4. Run tests again to verify
5. Run lint and build checks

## Task Requirements for subCheckedhqxleu
- Create `src/subCheckedhqxleu.ts` - subtraction with validation
- Create `src/subCheckedhqxleu.test.ts` - comprehensive tests
- Must call `isValidhqxleu` for validation
- Follow addCheckedhqxleu pattern but for subtraction (a - b)
- Run tests, lint, build before PR
