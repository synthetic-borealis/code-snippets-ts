import { Numeric } from './types';
import { isSorted, shuffleArray } from './utils';

const MAX_ITERATIONS = 300_000;

function bogoSort(arr: Numeric[]) {
  let currentIteration = 0;

  while (!isSorted(arr) && currentIteration < MAX_ITERATIONS) {
    shuffleArray(arr);
    currentIteration += 1;
  }
}

export default bogoSort;
