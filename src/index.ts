/**
 * Returns the nth element of an array (1-based index).
 * Returns undefined if n is out of bounds.
 */
export function getNthElement<T>(array: T[], n: number): T | undefined {
  // FIX: Correct off-by-one error
  return array[n - 1];
}
