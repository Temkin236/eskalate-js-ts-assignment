# Eskalate AI Software Engineer JS/TS Assignment

## Overview
This repository demonstrates debugging, testing, and minimal bug fixing in a TypeScript project. It includes a small module with a realistic bug, a Jest test suite, and a minimal fix. The environment is reproducible via Docker.

## Folder Structure
- `src/` — Application source code
- `tests/` — Test suite
- `Dockerfile` — CI-style test runner
- `README.md` — Project documentation
- `Explanation.md` — Bug and fix explanation
- `package.json` — Pinned dependencies
- `.gitignore` — Excludes lockfiles, node_modules, dist

## Running Tests Locally

```bash
npm install
npm test
```

## Running Tests with Docker

```bash
docker build -t eskalate-assignment .
docker run --rm eskalate-assignment
```

## Notes
- All dependencies are pinned to exact versions.
- The bug is minimal and realistic, with tests that reproduce it.
- The fix is the smallest possible change.
- No lockfiles are included.
# AI Experts Assignment (JS/TS)

This assignment evaluates your ability to:

- set up a small JavaScript/TypeScript project to run reliably (locally + in Docker),
- pin dependencies for reproducible installs,
- write focused tests to reproduce a bug,
- implement a minimal, reviewable fix.

## What you will do

### 1) Dockerfile (required)

Create a `Dockerfile` so the project can run the test suite in a non-interactive, CI-style environment.

Requirements:

- Your Docker image must run the test suite by default using npm test.
- Ensure npm test works in a clean environment (Docker) without manual steps.
- The build must install dependencies from package.json using npm install.
- The image must run tests by default (use: `CMD ["npm", "test"]`).

### 2) Pin dependencies (required)

- Pin dependency versions in package.json (no ^ / ~; use exact x.y.z).
- Do not commit lockfiles (package-lock.json, yarn.lock, pnpm-lock.yaml).

### 3) README updates (required)

Update this README to include:

- how to run the tests locally,
- how to build and run tests with Docker.

### 4) Find + fix a bug (required)

There is a bug somewhere in this repository.

Your tasks:

- Identify the bug.
- Apply the smallest possible fix to make the tests pass.
- Keep the change minimal and reviewable (no refactors).

## Constraints

- Keep changes minimal and reviewable.
- Do not refactor unrelated code.
- Do not introduce extra tooling unless required.
- You may add tests and the smallest code change needed to fix the bug.

### 5) EXPLANATION.md (required)

Create `EXPLANATION.md` (max 250 words) containing:

- **What was the bug?**
- **Why did it happen?**
- **Why does your fix solve it?**
- **One realistic case / edge case your tests still don’t cover**

## Submission

- Submit a public GitHub repository URL containing your solution to the Google form link provided.
