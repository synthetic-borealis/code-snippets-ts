import { Numeric } from './types';

function insertionSort(arr: Numeric[]) {
  const array = arr;

  for (let i = 1; i < array.length; i += 1) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      const tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j -= 1;
    }
  }
}

export default insertionSort;
