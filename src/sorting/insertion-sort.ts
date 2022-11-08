import { Numeric } from './types';

function insertionSort(arr: Numeric[]) {
  for (let i = 1; i < arr.length; i += 1) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      const tmp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = tmp;
      j -= 1;
    }
  }
}

export default insertionSort;
