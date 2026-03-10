# Bug and Fix Explanation

## What was the bug?
The function `getNthElement` in `src/index.ts` incorrectly returned `undefined` for the first element (n = 1) due to an off-by-one error in array indexing.

## Why did it happen?
JavaScript arrays are zero-indexed, but the function used `array[n]` instead of `array[n - 1]`, causing the first element to be missed.

## Why does the fix solve it?
Changing `array[n]` to `array[n - 1]` correctly maps the 1-based input to the 0-based array index, making all tests pass.

## One realistic edge case not covered
The tests do not cover the case where `n` is negative or zero. The function currently returns `undefined` for these inputs, but does not explicitly handle them.
