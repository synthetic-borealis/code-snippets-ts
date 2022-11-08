import { Numeric } from './types';

function selectionSort(arr: Numeric[]) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let minIdx = i;

    for (let j = i; j < arr.length; j += 1) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      const tmp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = tmp;
    }
  }
}

export default selectionSort;
