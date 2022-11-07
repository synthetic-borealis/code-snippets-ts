import { Numeric } from './types';

function selectionSort(arr: Numeric[]) {
  const array = arr;
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIdx = i;

    for (let j = i; j < arr.length; j += 1) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      const tmp = arr[i];
      array[i] = array[minIdx];
      array[minIdx] = tmp;
    }
  }
}

export default selectionSort;
