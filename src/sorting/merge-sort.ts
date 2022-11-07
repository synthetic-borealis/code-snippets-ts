import { Numeric } from './types';

function merge(left: Numeric[], right: Numeric[]): Numeric[] {
  const merged: Numeric[] = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      merged.push(right.shift() as Numeric);
    } else if (right[0] > left[0]) {
      merged.push(left.shift() as Numeric);
    } else {
      merged.push(left.shift() as Numeric);
      merged.push(right.shift() as Numeric);
    }
  }
  merged.push(...left.concat(right));
  return merged;
}

function mergeSort(arr: Numeric[]) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    arr.splice(0, arr.length);
    arr.push(...merge(left, right));
  }
}

export default mergeSort;
