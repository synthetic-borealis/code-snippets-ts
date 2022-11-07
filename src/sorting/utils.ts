import { Numeric } from './types';

// eslint-disable-next-line import/prefer-default-export
export function isSorted(arr: Numeric[]): boolean {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
