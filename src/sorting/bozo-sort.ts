import { Numeric } from './types';
import { isSorted } from './utils';

const MAX_ITERATIONS = 300_000;

function bozoSort(arr: Numeric[]) {
  let currentIteration = 0;

  while (!isSorted(arr) && currentIteration < MAX_ITERATIONS) {
    const i = Math.floor(Math.random() * arr.length);
    let j = Math.floor(Math.random() * arr.length);

    while (j === i) {
      j = Math.floor(Math.random() * arr.length);
    }

    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    currentIteration += 1;
  }
}

export default bozoSort;
