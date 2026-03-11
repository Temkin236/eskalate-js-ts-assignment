import { getNthElement } from '../src/index';

describe('getNthElement', () => {
  const arr = ['a', 'b', 'c'];

  it('returns the second element', () => {
    expect(getNthElement(arr, 2)).toBe('b');
  });

  it('returns undefined for out-of-bounds', () => {
    expect(getNthElement(arr, 4)).toBeUndefined();
  });

  it('returns the first element (bug reproduction)', () => {
    // This test will fail with the bug
    expect(getNthElement(arr, 1)).toBe('a');
  });

  it('returns undefined for zero and negative n', () => {
    expect(getNthElement(arr, 0)).toBeUndefined();
    expect(getNthElement(arr, -1)).toBeUndefined();
  });
});
