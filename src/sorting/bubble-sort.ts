import { Numeric } from './types';

function bubbleSort(arr: Numeric[]) {
  let swaps: Numeric;
  const array = arr;
  do {
    swaps = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        array[i] = arr[i + 1];
        array[i + 1] = tmp;
        swaps += 1;
      }
    }
  } while (swaps > 0);
}

export default bubbleSort;
