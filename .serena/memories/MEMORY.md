## Project: hollon-e2e-fixture

**Purpose**: Minimal TypeScript project used as a target repository for hollon-ai E2E tests.

**Tech Stack**: 
- TypeScript 5.7
- Jest 29.7 (with ts-jest)
- ESLint 9.18
- Node.js

**Project Structure**:
- `src/` - Source files
- `dist/` - Compiled JavaScript output
- `jest.config.js` - Jest configuration
- `eslint.config.mjs` - ESLint configuration
- `tsconfig.json` - TypeScript configuration

**Key Commands**:
- `npm test` - Run tests
- `npm run build` - Compile TypeScript
- `npm run lint` - Lint code with ESLint

**Code Style & Conventions**:
- TypeScript strict mode enabled
- Test files colocated with implementation (e.g., `index.test.ts` alongside `index.ts`)
- JSDoc comments for public functions
- Simple, focused implementations
- Follow TDD: write tests first, then implement

**Development Workflow**:
1. Write tests first in `src/feature.test.ts`
2. Implement in `src/feature.ts`
3. Export from `src/index.ts`
4. Run `npm test` to verify
5. Run `npm run lint` to check style
6. Commit and create PR

**Important Rules**:
- TDD approach is mandatory
- Every new function must have tests
- Keep changes minimal and focused
- No unnecessary abstractions
