# Eskalate AI Software Engineer Assignment

> Minimal, reproducible TypeScript project for debugging, testing, and CI-style review.

# Eskalate AI Software Engineer JS/TS Assignment

## Overview
Minimal TypeScript project demonstrating debugging, reproducible tests, and a minimal bug fix. Includes Docker setup for CI-style testing.

## Quick Start

### Run Tests Locally
```bash
npm install
npm test
```

### Run Tests in Docker
```bash
docker build -t eskalate-assignment .
docker run --rm eskalate-assignment
```

## Folder Structure
- `src/` — Application source code
- `tests/` — Test suite
- `Dockerfile` — CI-style test runner
- `README.md` — Project documentation
- `Explanation.md` — Bug and fix explanation
- `package.json` — Pinned dependencies
- `.gitignore` — Excludes lockfiles, node_modules, dist

## Bug & Fix
- The function `getNthElement` had an off-by-one error (`array[n]` instead of `array[n - 1]`).
- Tests reproduce the bug and validate the fix.
- The fix is minimal and reviewable.

## Submission Checklist
- [x] All dependencies pinned (no ^ or ~)
- [x] No lockfiles committed
- [x] Dockerfile runs tests by default
- [x] README.md includes all instructions
- [x] Bug fixed, tests cover it
- [x] Explanation.md is complete

## Assignment Context
See `ASSIGNMENT.md` for full instructions and requirements.
