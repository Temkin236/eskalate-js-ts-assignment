/**
 * Returns the nth element of an array (1-based index).
 * Returns undefined if n is out of bounds.
 */
export function getNthElement<T>(array: T[], n: number): T | undefined {
  // Guard against zero or negative n
  if (n <= 0) return undefined;
  return array[n - 1];
}
