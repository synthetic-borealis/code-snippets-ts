import { Numeric } from './types';

function bubbleSort(arr: Numeric[]) {
  let swaps: Numeric;

  do {
    swaps = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swaps += 1;
      }
    }
  } while (swaps > 0);
}

export default bubbleSort;
